# Requirements Traceability Matrix (RTM)

Project: Interactive Weather Dashboard

| SRS ID | Requirement Description              | Code File / Module                                                         | Test Case ID |
| ------ | ------------------------------------ | -------------------------------------------------------------------------- | ------------ |
| FR-01  | Search weather by city name          | backend/src/routes/weatherRoutes.js                                        | TC-01        |
| FR-02  | Display current weather data         | backend/src/services/weatherService.js                                     | TC-02        |
| FR-03  | Display forecast data                | backend/src/services/weatherService.js                                     | TC-03        |
| FR-04  | Save favorite cities                 | backend/src/routes/favoritesRoutes.js                                      | TC-04        |
| FR-05  | Remove favorite cities               | backend/src/routes/favoritesRoutes.js                                      | TC-05        |
| FR-06  | View search history                  | backend/src/routes/historyRoutes.js                                        | TC-06        |
| FR-07  | Switch temperature units             | backend/src/services/weatherService.js, frontend/script.js                 | TC-07        |
| FR-08  | Handle errors properly               | backend/src/routes/weatherRoutes.js                                        | TC-08        |
| FR-09  | Responsive interface                 | frontend/index.html, frontend/style.css                                    | TC-09        |
| FR-10  | Store data for favorites and history | backend/src/routes/favoritesRoutes.js, backend/src/routes/historyRoutes.js | TC-10        |
| FR-11  | Use external weather API             | backend/src/services/weatherService.js                                     | TC-11        |
| FR-12  | Dashboard user interface             | frontend/index.html, frontend/script.js                                    | TC-12        |

## Test Case Mapping

| Test Case ID | Description                             |
| ------------ | --------------------------------------- |
| TC-01        | Verify city search request              |
| TC-02        | Verify weather data retrieval           |
| TC-03        | Verify forecast retrieval               |
| TC-04        | Verify adding favorite city             |
| TC-05        | Verify removing favorite city           |
| TC-06        | Verify search history retrieval         |
| TC-07        | Verify temperature unit switching       |
| TC-08        | Verify invalid request handling         |
| TC-09        | Verify responsive UI layout             |
| TC-10        | Verify storage of favorites and history |
| TC-11        | Verify external API communication       |
| TC-12        | Verify dashboard rendering              |
