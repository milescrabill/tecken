tecken - All things Mozilla Symbol Server
=========================================

[![CircleCI](https://circleci.com/gh/mozilla/tecken.svg?style=svg)](https://circleci.com/gh/mozilla/tecken)
[![codecov](https://codecov.io/gh/mozilla/tecken/branch/master/graph/badge.svg)](https://codecov.io/gh/mozilla/tecken)
[![Updates](https://pyup.io/repos/github/mozilla/tecken/shield.svg)](https://pyup.io/repos/github/mozilla/tecken/)


Please use the documentation on: **https://tecken.readthedocs.io**


To Get Coding
-------------

You need to be able to run Docker. In particular an executable `docker-compose`.

Git clone and then run:

    make build
    make up

Now a development server should be available at `http://localhost:8000`.

To test the symbolication run:

    curl -d '{"stacks":[[[0,11723767],[1, 65802]]],"memoryMap":[["xul.pdb","44E4EC8C2F41492B9369D6B9A059577C2"],["wntdll.pdb","D74F79EB1F8D4A45ABCD2F476CCABACC2"]],"version":4}' http://localhost:8000
