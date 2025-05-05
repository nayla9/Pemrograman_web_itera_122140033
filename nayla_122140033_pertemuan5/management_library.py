from abc import ABC, abstractmethod

# Abstract Class
class LibraryItem(ABC):
    def __init__(self, item_id, title):
        self._id = item_id
        self._title = title
        self._available = True

    @abstractmethod
    def display_info(self):
        pass

    @property
    def title(self):
        return self._title

    @title.setter
    def title(self, new_title):
        if isinstance(new_title, str):
            self._title = new_title

    @property
    def available(self):
        return self._available

    @available.setter
    def available(self, status):
        if isinstance(status, bool):
            self._available = status

    def get_id(self):
        return self._id

# Subclass Book (Inheritence)
class Book(LibraryItem):
    def __init__(self, item_id, title, author, genre):
        super().__init__(item_id, title)
        self._author = author
        self._genre = genre

    def display_info(self):
        print(f"[BOOK] ID: {self._id}, Title: {self._title}, Author: {self._author}, Genre: {self._genre}, Available: {self._available}")

# Subclass Magazine (Inheritence)
class Magazine(LibraryItem):
    def __init__(self, item_id, title, issue, publisher):
        super().__init__(item_id, title)
        self._issue = issue
        self._publisher = publisher

    def display_info(self):
        print(f"[MAGAZINE] ID: {self._id}, Title: {self._title}, Issue: {self._issue}, Publisher: {self._publisher}, Available: {self._available}")

# Kelas Perpustakaan
class Library:
    def __init__(self):
        self._collection = []

    def add_item(self, item):
        self._collection.append(item)

    def display_all_items(self):
        print("=== Daftar  di Perpustakaan ===")
        for item in self._collection:
            item.display_info()

    def find_item(self, keyword):
        result = []
        for item in self._collection:
            if keyword.lower() in item.title.lower() or keyword == item.get_id():
                result.append(item)
        return result

    def edit_item(self, item_id, new_title=None, new_status=None):
        for item in self._collection:
            if item.get_id() == item_id:
                if new_title:
                    item.title = new_title
                if new_status is not None:
                    item.available = new_status
                print(f"Item dengan ID {item_id} telah diperbarui.")
                return
        print(f"Item dengan ID {item_id} tidak ditemukan.")

# Contoh Penggunaan Perpustakaan
if __name__ == "__main__":
    lib = Library()

    book1 = Book("B001", "Dasar Pemrograman Python 3", "Abdul Kadir", "Programming")
    book2 = Book("B002", "Another Monster: The Investigative Report", "Werner Weber, Naoki Urasawa, Takashi Nagasaki", "Fantasy")
    book3 = Book ("B003", "Bumi Manusia", "Pramoedya Ananta Toer", "Historical")
    mag1 = Magazine("M001", "Top Model In The World", "March 2025", "Forbes")
                
    lib.add_item(book1)
    lib.add_item(book2)
    lib.add_item(mag1)

    lib.display_all_items()

    print("\n Search: 'Pemrograman'")
    found_items = lib.find_item("Pemrograman")
    for item in found_items:
        item.display_info()

