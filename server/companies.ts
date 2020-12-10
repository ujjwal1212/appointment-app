interface CategorySchema {
  [index: string]: any;
}
export const categories: CategorySchema = {
  "1": {
    id: "1",
    companies: [
      {
        "id": "64BC4212-7137-3A1B-3DD7-BE62E73F9F3A",
        "image": "4135A9B4-2389-9AC8-7276-3256474AF3E1",
        "name": "Non Luctus Incorporated",
        "city": "Attigliano",
        "address": "P.O. Box 146, 531 Dolor St.",
        "isFavorited": true,
        "latitude": "48.30173",
        "longitude": "37.43549",
        "description": "arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt",
        "phone": "16130612 3405",
        "categoryId": "1",
        "services": [
          {
            "id": "64BC4212-7137-3A1B-3DD7-BE62E73F9UJW",
            "name": "Service 1",
            "pivot": {
              "price": 100
            }
          },
          {
            "id": "3118CFDB-772E-0E02-749E-D532FAC9C628",
            "name": "Service 2",
            "pivot": {
              "price": 50
            }
          },
          {
            "id": "Facial",
            "name": "Service 3",
            "pivot": {
              "price": 300
            }
          }
        ]
      },
      {
        "id": "5BCD7BE7-1092-C7D5-CDFC-FB5C720C6085",
        "image": "71E19853-29C8-A4D7-84AB-9774010799C0",
        "name": "Elit Fermentum Inc.",
        "city": "Le Grand-Quevilly",
        "address": "Ap #948-474 Volutpat. Avenue",
        "isFavorited": true,
        "latitude": "53.98432",
        "longitude": "6.85375",
        "description": "lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus",
        "phone": "16991023 1183",
        "categoryId": "1",
        "services": [
          {
            "id": "872B5488-83E4-15B7-58C7-A916751EADC7",
            "name": "Service 1",
            "pivot": {
              "price": 100
            }
          },
          {
            "id": "CCA88761-9A1D-4506-2A3B-E4E1948CEBD4",
            "name": "Service 2",
            "pivot": {
              "price": 50
            }
          },
          {
            "id": "4E43D7F8-13DC-3A60-D608-BF585605092A",
            "name": "Service 3",
            "pivot": {
              "price": 300
            }
          }
        ]
      },
      {
        "id": "EA9DAFE1-A77D-34AE-CC44-81568617A7C7",
        "image": "4E307995-3444-3FA2-19CC-D19EF40E525C",
        "name": "Nulla Aliquet Ltd",
        "city": "Kaiserslauter",
        "address": "2415 Vivamus Avenue",
        "isFavorited": true,
        "latitude": "5.87309",
        "longitude": "48.04863",
        "description": "id nunc interdum feugiat. Sed nec metus facilisis lorem tristique",
        "phone": "16930713 1657",
        "categoryId": "1",
        "services": [
          {
            "id": "008C3B70-63BC-41B7-14A9-2B0348A68A91",
            "name": "Service 1",
            "pivot": {
              "price": 100
            }
          },
          {
            "id": "1AE97B1C-4742-E1B6-3009-EB8599BCA02D",
            "name": "Service 2",
            "pivot": {
              "price": 50
            }
          },
          {
            "id": "62173AD8-A7B7-EA95-959D-F1092A2E55F5",
            "name": "Service 3",
            "pivot": {
              "price": 300
            }
          }
        ]
      },
    ]
  }    
};