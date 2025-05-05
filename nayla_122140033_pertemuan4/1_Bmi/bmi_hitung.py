# Input berat (kg) dan tinggi badan (m)
berat = float(input("Berat Badan (kg): "))
tinggi = float(input("Tinggi Badan (m): "))

# Perhitungan BMI
bmi = berat / (tinggi ** 2)

# Kategori BMI
if bmi < 18.5:
    kategori = "Berat Badan Kurang :("
elif bmi < 25:
    kategori = "Berat Badan Normal :)"
elif bmi < 30:
    kategori = "Berat Badan Berlebih"
else:
    kategori = "Obesitas!"

# Outputnya

print(f"\nNilai BMI Anda (kg/m2): {bmi}")
print(f"Kategori: {kategori}")
