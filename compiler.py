# file read/write stuff
def writeFile(pathToFile, contents):
    file = open(pathToFile, 'w+', encoding='utf-8')
    file.write(str(contents))
    file.close()

def readFile(pathToFile):
    file = open(pathToFile, 'r', encoding='utf-8')
    contents = file.read()
    file.close()
    return contents

INPUT_FILES = readFile('inputFiles.txt').split('\n')

OUTPUT_FILE = 'wrk.js'

output = ''

for fileIdx in range(len(INPUT_FILES)):
    filename = INPUT_FILES[fileIdx]
    if len(filename) > 0:
        content = readFile(filename)
        output += content + '\n\n'

writeFile(OUTPUT_FILE, output)