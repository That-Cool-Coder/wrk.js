# file read/write stuff
def writeFile(pathToFile, contents):
    file = open(pathToFile, 'w+')
    file.write(str(contents))
    file.close()

def readFile(pathToFile):
    file = open(pathToFile, 'r')
    contents = file.read()
    file.close()
    return contents

INPUT_FILES = readFile('inputFiles.txt').split('\n')

OUTPUT_FILE = 'wrk.js'

output = ''

for fileIdx in range(len(INPUT_FILES)):
    content = readFile(INPUT_FILES[fileIdx])
    output += content + '\n\n'

writeFile(OUTPUT_FILE, output)