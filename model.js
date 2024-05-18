import * as tf from '@tensorflow/tfjs';

export const createModel = () => {
  const model = tf.sequential();
  model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
  model.add(tf.layers.dense({units: 50, activation: 'relu'}));
  model.add(tf.layers.dense({units: 1}));
  model.compile({optimizer: 'adam', loss: 'meanSquaredError'});
  return model;
};

export const generateData = () => {
  const xs = tf.randomNormal([100, 10]);
  const ys = tf.randomNormal([100, 1]);
  return {xs, ys};
};
