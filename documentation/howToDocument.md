## How to document wrk.js

[Back to README](/README.md)  

#### Creating the user reference

The basic user reference is stored in /documentation/rawReference.txt. However, this should be not edited itself, as it is created by a python script (/documentation/referenceCompiler.py) from all of the raw reference sections located in seperate .txt files in /documentation/rawReferenceSections. The reference sections line up approximately with the JS source files.

Each section in the files is one feature/function of wrk.js. The sections are seperated by NEXTSECTION. The sections are divided into parts, too. The parts are seperated by a line break. The parts are:
- feature/function name
- feature function name with args (if it's a variable or has no args juts repeat the name, show optional args and their default values)
- description
- file defined
- example with args
- link to a full reference page on that item (not implemented yet, may never be implemented - instead might be added by the compiler, using its own page system)

Example:
```
wrk.NeuralNetwork()
wrk.NeuralNetwork()
A generic neural network class
/src/machineLearning/neuralNetwork.js
new wrk.NeuralNetwork()
nolink

NEXTSECTION

wrk.NeuralNetwork.train()
wrk.NeuralNetwork.train(dataset, iterations=1)
Train the network using the dataset iterations times.
/src/machineLearning/neuralNetwork.js
/src/machineLearning/neuralNetwork.js
network.train([{ inputs: [0,0], outputs: [0] }, { inputs: [0,1], outputs: [1] }, { inputs: [1,0], outputs: [1] }, { inputs: [1,1], outputs: [0] }])
nolink
```
