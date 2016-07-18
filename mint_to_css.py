import argparse, os

parser = argparse.ArgumentParser(description='Converts .minttyrc to .css')
parser.add_argument('file', help='file')
args = parser.parse_args()

filename=args.file

if not os.path.isfile(filename):
	print "404 Not Found"
	exit()
else:
	filename,fileext=os.path.splitext(filename)
	file = open(filename+fileext,'r')
	lines = file.read().split('\n')
	file.close()

	file = open(filename+'.css','a')
	file.truncate()

	#
	# main action
	#
	for line in lines:
		command = line.split('=')[0]
		arg = line.split('=')[1]
		if "background" in line.lower():
			file.write('*[%s]{background-color:rgb(%s);}\n\n' % (command,arg))
		elif "foreground" in line.lower():
			file.write('*[%s]{color:rgb(%s);}\n\n' % (command,arg))
		else:
			file.write('*[b%s]{background-color:rgb(%s);}\n' % (command,arg))
			file.write('*[f%s]{color:rgb(%s);}\n\n' % (command,arg))

	file.close()
	print "Jobs finished"
	exit()