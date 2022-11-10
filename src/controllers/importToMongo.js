import mongoose from 'mongoose'
import TaskModel from "../models/TaskModel.js";
import csvtojson from "csvtojson";
import { pool } from '../index.js';
import { backupQuery } from '../queries.js';

export const importToMongo = async () => {

mongoose
  .connect("mongodb://127.0.0.1:27017/Taskapp")
  .then(() => {
    console.log("connected to mongoDB");
  });

  let fixedQuery = backupQuery.replace((/(\n)/gm, '\r\n'))
  fixedQuery = fixedQuery.replace(/(\\backup)/gm, '\\src\\backup')
  pool.query(fixedQuery, (error) => {
    if (error) {
      throw error;
    }
  });

  let tasks;

  await csvtojson()
  .fromFile('src/backup/Todos-tasks.csv')
  .then(csvData => {
    tasks = csvData;
  });

  TaskModel.deleteMany({}, (err, res) => {
  });

  TaskModel.insertMany(tasks, {ordered: false} ,(err, res) => {
  });
}
