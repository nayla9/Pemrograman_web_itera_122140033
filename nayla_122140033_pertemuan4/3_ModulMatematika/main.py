# Cara 1: Import modul math_operation.py ke main.py
import math_operations

# Cara 2: Import fungsi langsung dari math_operation.py
from math_operations import celsius_ke_fahrenheit, celsius_ke_kelvin

# Perhitungan Geometri
print("* Perhitungan Geometri *")
print(f"Luas Persegi (s=5): {math_operations.luas_persegi(5)}")
print(f"Keliling Persegi (s=5): {math_operations.keliling_persegi(5)}")
print(f"Luas Persegi Panjang (7x3): {math_operations.luas_persegi_panjang(7, 3)}")
print(f"Keliling Persegi Panjang (7x3): {math_operations.keliling_persegi_panjang(7, 3)}")
print(f"Luas Lingkaran (r=4): {math_operations.luas_lingkaran(4):.2f}")
print(f"Keliling Lingkaran (r=8): {math_operations.keliling_lingkaran(8):.2f}")

# Konversi suhu
print("\n* Konversi Suhu * ")
c = 32
print(f"{c}°C = {celsius_ke_fahrenheit(c):.2f}°F")
print(f"{c}°C = {celsius_ke_kelvin(c):.2f} K")

# Tampilkan konstanta
print(f"\nNilai pi dari modul: {math_operations.pi}")
