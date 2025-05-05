# math_operations.py

# Konstanta
pi = 3.14159  # Nilai pi untuk menghitung luas dan keliling lingkaran

# Perhitungan Geometri
def luas_persegi(s):
    # s = sisi persegi
    return s * s

def keliling_persegi(s):
    # s = sisi persegi
    return 4 * s

def luas_persegi_panjang(p, l):
    # p = panjang, l = lebar persegi panjang
    return p * l

def keliling_persegi_panjang(p, l):
    # p = panjang, l = lebar persegi panjang
    return 2 * (p + l)

def luas_lingkaran(r):
    # r = jari-jari lingkaran
    return pi * r * r

def keliling_lingkaran(r):
    # r = jari-jari lingkaran
    return 2 * pi * r

# Konversi Suhu
def celsius_ke_fahrenheit(c):
    # c = suhu dalam celcius
    return (c * 9/5) + 32

def celsius_ke_kelvin(c):
    # c = suhu dalam celcius
    return c + 273.15