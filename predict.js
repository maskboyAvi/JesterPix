import * as tf from "@tensorflow/tfjs";
import { createModel } from "./model.js";

export const makePrediction = () => {
  const model = createModel();
  const input = tf.randomNormal([1, 10]);
  const prediction = model.predict(input);
  prediction.print();
};
