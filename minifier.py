# Minify wrk.js using rjsmin https://github.com/ndparker/rjsmin

from sys import argv
from rjsmin import jsmin

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

# Main program

if len(argv) > 1:
    INPUT_FILE = argv[1]
else:
    INPUT_FILE = 'wrk.js'
if len(argv) > 2:
    OUTPUT_FILE = argv[2]
else:
    OUTPUT_FILE = 'wrk.min.js'

def fatalError(message):
    input('Fatal error: ' + message + ' (press enter to quit)')
    quit()

unminifiedWrk = None
minifiedWrk = None
try:
    unminifiedWrk = readFile(INPUT_FILE)
except:
    fatalError('Could not open ' + INPUT_FILE)

minifiedWrk = jsmin(unminifiedWrk)

try:
    writeFile(OUTPUT_FILE, minifiedWrk)
except:
    fatalError('Could not write minified wrk to ' + OUTPUT_FILE)