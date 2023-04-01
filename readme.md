Pointhub Test 2

```
Buatlah 1 endpoint API menggunakan mongodb dan nodejs untuk mendapatkan data invoice sesuai dengan format response berikut
{
“_id”: “<objectId from mongodb>”,
“customer”: {
	“name”: “john”,
	“phone”: “02112345678”
},
“date”: “2023-01-01 15:00:00”,
“total”: 500000
}
```

Buatan: Bagus Dwi Putra
Linkedin: https://www.linkedin.com/in/bagus-dwi-putra/
Private email: bagusdp2011@gmail.com

Untuk lihat hasil,
silahkan ketik ``` node server.js ```
dan ada di endpoint ```localhost:3000/invoice```

Saya sengaja menambah "id": 1, untuk mempermudah filter dan pengambilan data

Contoh result response dari postman:
```{
    "_id": "64279331acffc15a6bbdc937",
    "id": "1",
    "customer": {
        "name": "john",
        "phone": "02112345678"
    },
    "date": "2023-01-01 15:00:00",
    "total": "500000",
    "__v": 0
}
```
