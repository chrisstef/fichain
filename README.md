<!-- ## Fichain | A Blockchain & Cryptocurrency App

<!-- [frontend](fichain-frontend.png)


## Background

Understanding blockchain isn't easy. At least it wasn't for me. 
I had to go through number of frustrations due to a few funcional open source examples of how this technology works.
And I like learning by doing so if you do the same, allow me to guide you and by the end you will have a functioning blockchain.
To take it a step further, I connected the blockchain with a frontend UI to provide a solid idea of how blockchains work.


**So, what is blockchain?**

Remember that a blockchain is an immutable, sequential chain of records called blocks. 
The important thing is that they’re chained together using hashes.
They can contain transactions, files or any data you like, really! 
It's innovation, is that it guarantees the transparency and security of a record of data,
and generates trust without the need for a trusted third party.
The validation of the transactions and therefore the continuation of the (block)chain is called mining.

**What about mining?**

Each time a transaction is made, it’s broadcasted to the entire network. 
Upon hearing the broadcasts, miners take a bunch of transactions, validate that they are “legitimate” — and put them into a block.
For a public blockchain, the decision to add a transaction to the chain is made by consensus. 
This means that the majority of “nodes” (miners) must agree that the transaction is valid. 
The people who own the computers in the network are incentivised to verify transactions through rewards. 
This process is known as ‘proof of work’.

With those in mind, let's dive deeper...


## About the application

This app, aims to demonstrate the above concepts.
As a client while entering the app, we will be taking the role of the miner,
participating in the creation of the blockchain by validating blocks.

**My workflow:**

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

**Virtual Environment**

A virtual environment allows us to create an isolated space where our project can install its external packages. 
This is especially helpful when we're managing multiple projects on our machines. 
Often, external packages update their classes and methods when new versions are released.
However, separate virtual environments can have different versions of the same package installed - that way,
each project can rely on the versions of their dependencies to stay consistent.

Let's proceed with activating it:

```
.\env\Scripts\activate
```

Our virtual environment called `env` is activated. Time to move on the backend.

**Backend**

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


**Frontend**

Navigate the to `/frontend` directory where our React code will exist with:

```
cd frontend
```








## Run application



## Run tests



## Command Reference

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


## Future ideas:


## Contribution:


## Dona -->

