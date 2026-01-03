if [ $# -eq 0 ]; then
	echo "No arguments supplied"
else
	while [ $# -gt 0 ]; do
		mkdir "ex$1"
		shift
	done
fi
