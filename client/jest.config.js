module.exports = {
	// Other Jest configuration options
	testEnvironment: "node",
	transform: {
		"^.+\\.tsx?$": "babel-jest"
	  },
	transformIgnorePatterns: [],
	// Add the following line to enable support for ES modules
	testEnvironmentOptions: {
	  "--experimental-vm-modules": true
	}
  };
  