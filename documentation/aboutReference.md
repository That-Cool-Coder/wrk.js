## About the wrk.js reference

[Back to README](/README.md)

#### A quick guide to editing the reference
1. Find the file in `/reference/rawReferenceSections/` that most matches the feature you want to document.
If a file doesn't exist, create it.
2. Add the feature, according to the syntax in [Raw reference sections](#raw-reference-sections)
3. Make sure that the file you put the feature in is listed in `/reference/inputFiles.txt`
4. Run `/reference/referenceCompiler.py`
5. To update the HTML reference, run `/reference/htmlDocMaker.py` (remember to update the version number in `/reference/htmlContentsTemplate.html`)

#### Raw reference sections
At its most basic, the reference is stored as a series of text files in `/reference/rawReferenceSections/`. Each one corresponds roughly to a JS source file. The files are made up of sections.

Each section in the files is one feature/function of wrk.js. The sections are seperated by 
```
(empty line, don't actually write this in the reference)
NEXTSECTION
(empty line, don't actually write this in the reference)
```

The sections are divided into parts, too. The parts are seperated by a line break. The parts are:
- feature/function name
- feature function name with args (if it's a variable or has no args juts repeat the name, show optional args and their default values)
- example with args
- description
- file defined
- link to a full reference page on that item (not implemented yet, may never be implemented - instead might be added by the compiler, using its own page system)

To make code sections, put three backticks around the block as in markdown (` ``` `).

Example:
```
wrk.NeuralNetwork()
wrk.NeuralNetwork()
var network = new wrk.NeuralNetwork()
A generic neural network class
/src/machineLearning/neuralNetwork.js
nolink

NEXTSECTION

wrk.NeuralNetwork.createInputLayer()
wrk.NeuralNetwork.createInputLayer(size)
network.addInputLayer(5)
Create the input layer for the neural network with ```size``` neurons. Will overwrite an existing input layer if there is one in that network already.
src/machineLearning/neuralNetwork.js
nolink
```

#### Compiled raw reference
The raw reference sections are then compiled into a single file by `/reference/referenceCompiler.py`. This does nothing more than paste the files together. It outputs the reference to `/reference/rawReference.txt`. The input files for the reference compiler are specified in `/reference/inputFiles.txt` with a line break between each file.