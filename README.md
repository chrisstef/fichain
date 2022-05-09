## Fichain | A Blockchain & Cryptocurrency App

<img src="frontend/src/assets/fichain-frontend.png" alt="frontend" title="Optional title">

## Background

Understanding blockchain isn't easy. At least it wasn't for me. 
I had to go through number of frustrations due to a few funcional open source examples of how this technology works.
And I like learning by doing so if you do the same, allow me to guide you and by the end you will also have a functioning blockchain.
To take it a step further, I connected the blockchain with a frontend UI to provide a solid idea of how blockchains work.


### So, what is blockchain?

Remember that a blockchain is an immutable, sequential chain of records called blocks. 
The important thing is that they’re chained together using hashes.
They can contain transactions, files or any data you like, really! 
It's innovation, is that it guarantees the transparency and security of a record of data,
and generates trust without the need for a trusted third party.
The validation of the transactions and therefore the continuation of the (block)chain is called mining.

### What about mining?

Each time a transaction is made, it’s broadcasted to the entire network. 
Upon hearing the broadcasts, miners take a bunch of transactions, validate that they are “legitimate” — and put them into a block.
For a public blockchain, the decision to add a transaction to the chain is made by consensus. 
This means that the majority of “nodes” (miners) must agree that the transaction is valid. 
The people who own the computers in the network are incentivised to verify transactions through rewards. 
This process is known as ‘proof of work’.

With those in mind, let's dive deeper...


## The application

This app, aims to demonstrate the above concepts.
As a client while entering the app, we will be taking the role of the miner,
participating in the creation of the blockchain by validating blocks.

### My workflow

- Building the Blockchain app with Python.

- Implement Dynamic difficulty for the mining of new blocks.

- Incorporate the crucial concept of Proof of Work into the Blockchain.

- Enhance the application to prepare for networking.

- Create the Blockchain network using Flask and Pub/Sub.

- Integrate the Cryptocurrency, building Wallets, Keys, and Transactions.

- Testing the app using Pytest.

- Extend the network implementation with the cryptocurrency.

- Transition from Python to JavaScript to continue with building the frontend.

- Establish frontend-backend connections and begin coding with React.js.

- Create the frontend portion for the blockchain portion of the system.

- Complete the frontend by building a UI for the cryptocurrency portion of the system.

At this moment, there is an initial deployment but there are more actions needed to be made,
in order to deploy both Flask and React subfolders and estabilish a full deployment (propably on Heroku).

Feel free to check the current deployment here:

https://fichain.vercel.app/


## Installation

First, navigate to the folder where your project will exist:

```
cd <folder_name>
```

Then, clone to the project with the following command:

```
git clone https://github.com/chrisstef/fichain
```

### Virtual Environment

A virtual environment allows us to create an isolated space where our project can install its external packages. 
This is especially helpful when we're managing multiple projects on our machines. 
Separate virtual environments can have different versions of the same package installed - that way,
each project can rely on the versions of their dependencies to stay consistent.

Let's proceed with activating it:

```
.\env\Scripts\activate
```

Our virtual environment called `env` is activated. Moving to backend.

### Backend

Make sure that virtual environment is activated:

```
.\env\Scripts\activate
```

Navigate the to `/backend` directory:

```
cd backend
```

We'll install the requirements coming from `requirements.txt` file with the following command:

```
pip install -r requirements.txt
```

Backend is set up. 


### Frontend

With env activated, navigate to the `/frontend` directory:

```
cd frontend
```
and then:

```
npm install
```


## Run application

To run the application, we first need to start the flask app (network-backend).
To do so, we have to open a new terminal, activate our virtual environment (env) and type:

```
python -m backend.app
```

If all goes good, our flask app will run on http://127.0.0.1:5000 and the result should be something like this:

<img src="frontend/src/assets/fichain-flask.png" alt="flask" title="Optional title">


On a new terminal, we navigate on our React folder with:

```
cd frontend
```

and then we type:

```
npm start
```

The frontend will run on ... and the app is live to play with !!!

<img src="frontend/src/assets/fichain-frontend.png" alt="frontend-1" title="Optional title">

Finally, it would be recommended to proceed with some test transactions,
in order to add blocks, store some data and therefore being able to exchange, 
as well as mine some blocks.

To do so, on a 3rd terminal activate our virtual environment (env) and type:

```
python -m backend.scripts.test_app
```

This script will create test transactions between known addresses and distribute the
block reward on the nodes. The script runs 4 times, therefore we will have 4 new blocks.


## Run tests

The general approach to tests is to create a series of assert statements that verify whether or not a value is equal to some other value.
Our test were made with `pytest` and in total we made 40 assertions and all of them were successful.

To run the test navigate on the root directory and:

```
python -m pytest backend/tests
```

<img src="frontend/src/assets/fichain-tests.png" alt="tests" title="Optional title">


Finally, there is a last script which demonstrates the average block rate based on the adjusted difficulty mechanism.

Here's the code:

```
python -m backend.scripts.average_block_rate
```

<img src="frontend/src/assets/fichain-populate.png" alt="frontend" title="Optional title">


## Command Reference

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
python -m backend.app
```

**Run the frontend**

In the frontend directory:
```
npm start
```


## Contribution

Thank you for considering to help out with the source code! I welcome contributions from anyone on the internet, 
and am grateful for even the smallest of fixes!
If you'd like to contribute to fichain, please fork, fix, commit and send a pull request to review and merge into the main code base. 


## Acknowledgments:

This project wouldn't have been possible without the help of certain people,
who although unknowingly helped me to understand concepts of Blockchain and Cryptocurrency systems. 
The course link which I took is given below.

{Udemy course on Cryptocurrency systems}
