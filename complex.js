import * as tf from '@tensorflow/tfjs';

const createComplexModel = () => {
  const model = tf.sequential();
  model.add(tf.layers.conv2d({inputShape: [28, 28, 1], kernelSize: 5, filters: 8, activation: 'relu'}));
  model.add(tf.layers.maxPooling2d({poolSize: [2, 2]}));
  model.add(tf.layers.conv2d({kernelSize: 5, filters: 16, activation: 'relu'}));
  model.add(tf.layers.maxPooling2d({poolSize: [2, 2]}));
  model.add(tf.layers.flatten());
  model.add(tf.layers.dense({units: 10, activation: 'softmax'}));
  model.compile({optimizer: 'adam', loss: 'categoricalCrossentropy', metrics: ['accuracy']});
  return model;
};

const generateComplexData = () => {
  const xs = tf.randomNormal([1000, 28, 28, 1]);
  const ys = tf.oneHot(tf.tensor1d(Array.from({length: 1000}, () => Math.floor(Math.random() * 10)), 'int32'), 10);
  return {xs, ys};
};

export const trainComplexModel = async () => {
  const model = createComplexModel();
  const {xs, ys} = generateComplexData();
  await model.fit(xs, ys, {epochs: 20});
  console.log('Complex model training complete');
};

trainComplexModel();
