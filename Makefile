BIN := node_modules/.bin
BROWSERIFY := $(BIN)/browserify
UGLIFY := $(BIN)/uglifyjs

all: build

build: build/srnd.js build/srnd.min.js

build/srnd.min.js: build/srnd.js

build/srnd.js: node_modules index.js
	$(BROWSERIFY) index.js -o build/srnd.js
