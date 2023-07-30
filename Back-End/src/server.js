require('express-async-errors');
const AppError = require('./utils/AppError');
const uploadConfig = require('./configs/upload');

const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/files', express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes);

app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }

  console.log(error);

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  })
})

const PORT = 4444;

app.listen(PORT, () => console.log(`Running on PORT: ${PORT}`));