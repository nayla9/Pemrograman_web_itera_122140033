from tabulate import tabulate

# Data mahasiswa
data_mahasiswa = [
    {"Nama": "Nayla", "NIM": "122140033", "nilai_tugas": 79, "nilai_uts": 69, "nilai_uas": 81},
    {"Nama": "Saka", "NIM": "122140034", "nilai_tugas": 91, "nilai_uts": 76, "nilai_uas": 88},
    {"Nama": "Michael", "NIM": "122140035", "nilai_tugas": 81, "nilai_uts": 84, "nilai_uas": 90},
    {"Nama": "Key", "NIM": "122140036", "nilai_tugas": 60, "nilai_uts": 72, "nilai_uas": 67},
    {"Nama": "Teddy", "NIM": "122140037", "nilai_tugas": 45, "nilai_uts":63, "nilai_uas": 57}
]

# Menghitung nilai akhir dan grade nilai
for mahasiswa in data_mahasiswa:
    nilai_akhir = (0.3 * mahasiswa["nilai_uts"]) + (0.4 * mahasiswa["nilai_uas"]) + (0.3 * mahasiswa["nilai_tugas"])
    mahasiswa["nilai_akhir"] = round(nilai_akhir, 2)

# Menentukan grade nilai mahasiswa
    if nilai_akhir >= 80:
        mahasiswa["grade"] = "A"
    elif nilai_akhir >= 70:
        mahasiswa["grade"] = "B"
    elif nilai_akhir >= 60:
        mahasiswa["grade"] = "C"
    elif nilai_akhir >= 50:
        mahasiswa["grade"] = "D"
    else:
        mahasiswa["grade"] = "E"

# Menampilkan data dalam bentuk tabel
print(tabulate(data_mahasiswa, headers="keys", tablefmt="grid"))

# Mencari mahasiswa dengan nilai tertinggi dan terendah
mahasiswa_tertinggi = max(data_mahasiswa, key=lambda m: m["nilai_akhir"])
mahasiswa_terendah = min(data_mahasiswa, key=lambda m: m["nilai_akhir"])

# Menampilka mahasiswa dengan nilai tertinggi dan terendah
print(f"\nMahasiswa dengan nilai tertinggi: {mahasiswa_tertinggi['Nama']} ({mahasiswa_tertinggi['nilai_akhir']})")
print(f"Mahasiswa dengan nilai terendah: {mahasiswa_terendah['Nama']} ({mahasiswa_terendah['nilai_akhir']})")