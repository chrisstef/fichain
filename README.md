# Python, JS, & React | A Blockchain & Cryptocurrency app

<!-- ![My app](python_blockchain_logo.png) -->

#### Command Reference

**Activate the virtual environment**
```
source blockchain-env/bin/activate
```

**Install all packages**
```
pip3 install -r requirements.txt
```

**Run the tests**

Make sure to activate the virtual environment.

```
python3 -m pytest backend/tests
```

**Run the application and API**

Make sure to activate the virtual environment.

```
python3 -m backend.app
```

**Run a peer instance**

Make sure to activate the virtual environment.

```
export PEER=True && python3 -m backend.app
```

**Run the frontend**

In the frontend directory:
```
npm run start
```

**Seed the backend with data**

Make sure to activate the virtual environment.

```
export SEED_DATA=True && python3 -m backend.app
```

**Activate the virtual environment**
```
.\env\Scripts\activate
```

**Install all packages**
```
pip install -r requirements.txt
```

**Run the tests**

Make sure to activate the virtual environment.

```
python -m pytest backend/tests
```

**Run the application and API**

Make sure to activate the virtual environment.

```
python -m app
```

**Run a peer instance**

Make sure to activate the virtual environment.

```
export PEER=True && python3 -m app
```

**Run the frontend**

In the frontend directory:
```
npm start
```

**Populate the blockchain with data**

Make sure to activate the virtual environment.

```
export SEED_DATA=True && python3 -m backend.app
```
