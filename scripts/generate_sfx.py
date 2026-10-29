import math
import struct
import wave
import random
import os

SAMPLE_RATE = 48000

def write_wav(filename, samples, sample_rate=SAMPLE_RATE):
    # Normalize samples to avoid clipping
    max_amp = max(abs(s) for s in samples) if samples else 1.0
    if max_amp > 0:
        samples = [s / max(max_amp, 1.0) * 0.92 for s in samples]
    
    with wave.open(filename, 'w') as wav_file:
        wav_file.setnchannels(1) # mono
        wav_file.setsampwidth(2) # 16-bit
        wav_file.setframerate(sample_rate)
        
        packed = bytearray()
        for s in samples:
            val = int(max(-32767, min(32767, s * 32767)))
            packed.extend(struct.pack('<h', val))
        wav_file.writeframes(packed)

def generate_sub_boom():
    dur = 1.8
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    phase = 0.0
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        # Pitch envelope: 150 Hz diving to 40 Hz
        freq = 40.0 + 110.0 * math.exp(-t * 6.5)
        phase += 2.0 * math.pi * freq / SAMPLE_RATE
        # Sine + 2nd harmonic
        sig = math.sin(phase) + 0.3 * math.sin(2.0 * phase)
        # Soft saturation tanh
        sig = math.tanh(sig * 1.5)
        # Amp envelope
        env = math.exp(-t * 2.2) if t > 0.005 else (t / 0.005)
        samples.append(sig * env)
    return samples

def generate_fast_whoosh():
    dur = 0.55
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    # Bandpass filtered noise sweep
    bp_state = [0.0, 0.0]
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        # Center freq sweeps up from 300 to 2800 then down to 500
        progress = t / dur
        center_freq = 400.0 + 2400.0 * math.sin(math.pi * progress)
        q = 3.5
        
        noise = random.uniform(-1.0, 1.0)
        # simple 2-pole bandpass
        bw = center_freq / q
        r = 1.0 - (bw * math.pi / SAMPLE_RATE)
        f_val = 2.0 * math.cos(2.0 * math.pi * center_freq / SAMPLE_RATE)
        bp_out = (1.0 - r) * noise + r * f_val * bp_state[0] - (r * r) * bp_state[1]
        bp_state[1] = bp_state[0]
        bp_state[0] = bp_out
        
        env = math.sin(math.pi * progress) ** 2
        samples.append(bp_out * env * 2.0)
    return samples

def generate_digital_click():
    dur = 0.08
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    phase = 0.0
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        freq = 2400.0 * math.exp(-t * 40.0)
        phase += 2.0 * math.pi * freq / SAMPLE_RATE
        sig = math.sin(phase) + 0.4 * random.uniform(-1.0, 1.0)
        env = math.exp(-t * 85.0)
        samples.append(sig * env)
    return samples

def generate_radar_ping():
    dur = 0.75
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    phase1, phase2 = 0.0, 0.0
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        phase1 += 2.0 * math.pi * 1760.0 / SAMPLE_RATE
        phase2 += 2.0 * math.pi * 3520.0 / SAMPLE_RATE
        sig = 0.8 * math.sin(phase1) + 0.25 * math.sin(phase2)
        env = math.exp(-t * 6.0) if t > 0.003 else (t / 0.003)
        samples.append(sig * env)
    return samples

def generate_tape_rewind():
    dur = 1.1
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    phase = 0.0
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        progress = t / dur
        freq = 80.0 + 1600.0 * (progress ** 2.2)
        phase += 2.0 * math.pi * freq / SAMPLE_RATE
        flutter = 1.0 + 0.3 * math.sin(2.0 * math.pi * 18.0 * t)
        noise = random.uniform(-0.15, 0.15)
        sig = (math.sin(phase) + noise) * flutter
        env = progress if progress < 0.85 else (1.0 - (progress - 0.85) / 0.15)
        samples.append(sig * env)
    return samples

def generate_heavy_whoosh():
    dur = 0.85
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    phase = 0.0
    bp_state = [0.0, 0.0]
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        progress = t / dur
        # Low rumble sub pitch dive
        rumble_freq = 110.0 * math.exp(-t * 2.0)
        phase += 2.0 * math.pi * rumble_freq / SAMPLE_RATE
        rumble = math.sin(phase) * 0.5
        
        # Noise sweep
        cf = 200.0 + 1500.0 * math.sin(math.pi * progress)
        bw = cf / 2.0
        r = 1.0 - (bw * math.pi / SAMPLE_RATE)
        f_val = 2.0 * math.cos(2.0 * math.pi * cf / SAMPLE_RATE)
        noise = random.uniform(-1.0, 1.0)
        bp_out = (1.0 - r) * noise + r * f_val * bp_state[0] - (r * r) * bp_state[1]
        bp_state[1] = bp_state[0]
        bp_state[0] = bp_out
        
        env = (math.sin(math.pi * progress) ** 1.8)
        samples.append((rumble + bp_out * 1.2) * env)
    return samples

def generate_camera_shutter():
    dur = 0.22
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        sig = 0.0
        # Click 1 at 0.0s
        if t < 0.05:
            sig += math.sin(2.0 * math.pi * 1800.0 * t) * math.exp(-t * 90.0) + random.uniform(-0.3, 0.3) * math.exp(-t * 80.0)
        # Click 2 at 0.045s
        t2 = t - 0.045
        if t2 >= 0:
            sig += 1.3 * math.sin(2.0 * math.pi * 2600.0 * t2) * math.exp(-t2 * 110.0) + random.uniform(-0.5, 0.5) * math.exp(-t2 * 90.0)
        samples.append(sig)
    return samples

def generate_laser_slash():
    dur = 0.4
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    phase = 0.0
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        freq = 3800.0 * math.exp(-t * 14.0) + 120.0
        phase += 2.0 * math.pi * freq / SAMPLE_RATE
        # Sawtooth-like via harmonics
        sig = math.sin(phase) + 0.5 * math.sin(2.0 * phase) + 0.25 * math.sin(3.0 * phase)
        env = math.exp(-t * 8.5) if t > 0.003 else (t / 0.003)
        samples.append(math.tanh(sig * 1.4) * env)
    return samples

def generate_stamp_impact():
    dur = 0.45
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    phase = 0.0
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        # Deep thump 90 to 35 Hz
        freq = 35.0 + 65.0 * math.exp(-t * 15.0)
        phase += 2.0 * math.pi * freq / SAMPLE_RATE
        sub = math.sin(phase)
        # Initial transient crunch
        crunch = random.uniform(-1.0, 1.0) * math.exp(-t * 60.0) if t < 0.06 else 0.0
        sig = math.tanh((sub * 1.5 + crunch * 0.8) * 1.2)
        env = math.exp(-t * 7.0)
        samples.append(sig * env)
    return samples

def generate_pop_ding():
    dur = 0.65
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    phase_pop = 0.0
    phase_ding = 0.0
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        # Bubble pop in first 0.04s
        pop = 0.0
        if t < 0.04:
            f_pop = 240.0 + 850.0 * (t / 0.04)
            phase_pop += 2.0 * math.pi * f_pop / SAMPLE_RATE
            pop = math.sin(phase_pop) * math.sin(math.pi * t / 0.04)
        # Ding chime at 2093 Hz (C7)
        phase_ding += 2.0 * math.pi * 2093.0 / SAMPLE_RATE
        ding = math.sin(phase_ding) * (math.exp(-t * 6.0) if t > 0.002 else t / 0.002)
        samples.append(pop * 1.2 + ding * 0.7)
    return samples

def generate_tension_drop():
    dur = 2.2
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    phase1, phase2 = 0.0, 0.0
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        f = 58.0 * math.exp(-t * 0.3)
        phase1 += 2.0 * math.pi * f / SAMPLE_RATE
        phase2 += 2.0 * math.pi * (f * 1.008) / SAMPLE_RATE
        sig = math.sin(phase1) + 0.8 * math.sin(phase2) + 0.3 * math.sin(2.0 * phase1)
        sig = math.tanh(sig * 1.8)
        env = math.exp(-t * 1.4) if t > 0.02 else t / 0.02
        samples.append(sig * env)
    return samples

def generate_mechanical_lock():
    dur = 0.25
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    phase = 0.0
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        sig = 0.0
        # High snap at 0.0s
        if t < 0.06:
            sig += math.sin(2.0 * math.pi * 3200.0 * t) * math.exp(-t * 120.0)
        # Deep lock thump at 0.035s
        t2 = t - 0.035
        if t2 >= 0:
            phase += 2.0 * math.pi * (160.0 * math.exp(-t2 * 20.0)) / SAMPLE_RATE
            sig += 1.4 * math.sin(phase) * math.exp(-t2 * 25.0)
        samples.append(sig)
    return samples

def generate_circuit_spark():
    dur = 0.4
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    phase = 0.0
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        # Frequency modulation chirp
        f = 2800.0 + 1600.0 * math.sin(2.0 * math.pi * 140.0 * t)
        phase += 2.0 * math.pi * f / SAMPLE_RATE
        crackle = random.uniform(-0.4, 0.4) if random.random() < 0.3 else 0.0
        sig = math.sin(phase) + crackle
        env = math.exp(-t * 9.0) if t > 0.003 else t / 0.003
        samples.append(sig * env)
    return samples

def generate_finale_chime():
    dur = 1.6
    num_samples = int(SAMPLE_RATE * dur)
    samples = []
    freqs = [1318.5, 1661.2, 1975.5] # E6, G#6, B6
    delays = [0.0, 0.08, 0.16]
    phases = [0.0, 0.0, 0.0]
    for i in range(num_samples):
        t = i / SAMPLE_RATE
        sig = 0.0
        for idx, (f, d) in enumerate(zip(freqs, delays)):
            dt = t - d
            if dt >= 0:
                phases[idx] += 2.0 * math.pi * f / SAMPLE_RATE
                env = math.exp(-dt * 3.2) if dt > 0.003 else dt / 0.003
                sig += math.sin(phases[idx]) * env
        samples.append(sig * 0.45)
    return samples

def main():
    out_dir = "sound_fx"
    os.makedirs(out_dir, exist_ok=True)
    
    effects = [
        ("01_cinematic_sub_boom.wav", generate_sub_boom),
        ("02_clean_fast_whoosh.wav", generate_fast_whoosh),
        ("03_digital_counter_click.wav", generate_digital_click),
        ("04_radar_ping_blip.wav", generate_radar_ping),
        ("05_tape_rewind_riser.wav", generate_tape_rewind),
        ("06_heavy_pan_whoosh.wav", generate_heavy_whoosh),
        ("07_focus_snap_shutter.wav", generate_camera_shutter),
        ("08_laser_beam_slash.wav", generate_laser_slash),
        ("09_stamp_impact_glitch.wav", generate_stamp_impact),
        ("10_funny_pop_ding.wav", generate_pop_ding),
        ("11_tension_bass_drop.wav", generate_tension_drop),
        ("12_station_lock_latch.wav", generate_mechanical_lock),
        ("13_circuit_electric_spark.wav", generate_circuit_spark),
        ("14_grand_finale_chime.wav", generate_finale_chime),
    ]
    
    print("Synthesizing Sound FX Assets...")
    for filename, func in effects:
        path = os.path.join(out_dir, filename)
        samples = func()
        write_wav(path, samples)
        print(f"Generated: {path} ({len(samples)/SAMPLE_RATE:.2f}s)")
    print("All Sound FX assets successfully generated!")

if __name__ == "__main__":
    main()

