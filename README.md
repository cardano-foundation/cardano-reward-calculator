<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="./public/images/cardano_logo.png" alt="Logo" width="320" height="65">
</div>

## Built With

Major frameworks/libraries used in this project.

[![ReactJS][ReactJS]][ReactJS-url] [![Axios][Axios]][Axios-url]
[![Tailwindcss][Tailwindcss]][Tailwindcss-url] [![BlueprintJS][BlueprintJS]][BlueprintJS-url] [![Node][Node.js]][Node-url]
[![Cardano][Cardano]][Cardano-url]

<a href="https://koios.rest/">
   <img src="./public/images/koios_logo.png" alt="Logo" width="120">
</a>

# Cardano Staking Reward Calculator
This is a web interface where
users can enter an ada balance and calculate their potential rewards
based on current blockchain parameters and a representative staking pool.

Visit and use it in production at <a href="https://cardano.org/calculator/">https://cardano.org/calculator</a>

This 2025 newly developed Cardano Staking Reward Calculator is built to allow translations into other languages, thus increasing international accessibility.
The first language into which the reward calculator has been translated is Japanese.  

カルダノ賭け報酬計算機を日本語で呼び出す。<a href="https://cardano.org/calculator/?lang=jp">https://cardano.org/calculator/?lang=jp</a>

German has been added as a further translation.

Rufe den Cardano Staking-Belohnungsrechner auf Deutsch auf: <a href="https://cardano.org/calculator/?lang=de">https://cardano.org/calculator/?lang=de</a>

## Using NextJs
We chose the NextJS framework as it is one of the most common forms to launch a web project and is well understood
in the developer's community. Create React App is not advisable for a production deployment. For more info on the choice of framework check the React guidance
<a href="https://react.dev/learn/start-a-new-react-project">here</a>

### Install and Run
Clone the repo, install npm packaged and start a local development environment

```shell
git clone https://github.com/cardano-foundation/cardano-reward-calculator.git
cd cardano-reward-calculator
npm install
npm run dev
```

This will launch a rewards calculator on <a href="http://localhost:3000/crewardcalculator">http://localhost:3000/crewardcalculator</a>

### Static Builds
NextJS supports static builds through Static Export mode, 
which can be enabled by uncommenting the `output: 'export'` line in `next.config.mjs`

Static builds have some advantages over a full NextJs deployment in that they can be integrated into
an existing front-end deployment and works similar to a One-page application. The limitations is that
is gives away the Server-side rendering and loses the NextJs inbuilt API functionality - but this might not
be a concern if relying on an external API provider from the front-end

> [!IMPORTANT]  
> For local development and debugging it usually works better when Not in Static Build mode (with `output: 'export'` commented out)

#### Reverse Proxy

The base path is `/crewardcalculator` and can be changed in the `next.config.mjs`
This path is useful if you want to launch the calculator as a standalone service in a docker container
and then have a reverse proxy reroute all the requests from a particular domain path to that
docker container. 

An example of this code for `nginx` is here

```shell
...
location /crewardcalculator {
    proxy_pass http://localhost:3000;  # Adjust based on where your docker container is running
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
...
```

### Docker
A Docker and a docker-compose file are provided in the main folder with an example for an autonomous deployment

## Sections
The application provides options for more
detailed calculations, including expandable sections that explain the
reward calculation formula, how various blockchain parameters influence
rewards, and the role of stake pools in the process.

The reward calculator is organized in 4 sections with increasing detail:

### 1. Basic Calculator
Displays the calculator and allow the user to input values to determine the expected % annual yield and
expected ada return over a year

<img src="public/images/calculator_printscreen.png" alt="Calculator prinstscreen" width="600">

### 2. Stake Pools
Specify up to 3 staking pool tickets to replace the representative pool in the first section. By
adding the staking pool tickets the calculator then shows the
expected return for these pools.

<img src="public/images/stakepools_printscreen.png" alt="Stake pools prinstscreen" width="600">

### 3. Stake Pool Parameters
Show the parameters of the selected stake pools and let the user change these parameters. The front-end will
then show how the rewards are expected to change with the new
parameters for the stake pools (e.g. minimum pool cost, margin,
stake and pledge).

<img src="public/images/stakepoolparameters_printscreen.png" alt="Stake pool parameters prinstscreen" width="600">

### 4. Blockchain Parameters
Show the static blockchain parameters
(which can not be changed e.g. total supply of ada) and the
dynamic parameters (that can be changed through a governance
vote and/or CIP e.g. the k and the a0 parameters). The user is
able to change the dynamic parameters in the front-end and the
calculator recalculate the new rewards for the
pools selected in the previous sections. The purpose of this section is to
inform the users of how blockchain parameters can impact the
rewards.

<img src="public/images/blockchainparameters_printscreen.png" alt="Blockchain parameters prinstscreen" width="600">

## Multilingual
The info sections can be translated to other languages.
The language is controlled by passing a parameter in the url (e.g. lang=jp for Japanese):

`http://localhost:3000/crewardcalculator?lang=jp`

The default language is English

The translations to other languages is done in the `./components/infos.js` file. Other languages can be added
by extending the language dictionary for each of the info sections in that file

## Methodology

### How staking rewards are calculated
At a high level, rewards are calculated and distributed each Epoch (~5 days) on Cardano.
These rewards are distributed amongst all stakeholders who have delegated to a stake pool.
These rewards are auto-generated by the protocol itself, and are not managed by the stake pool operators.

Staking Rewards come from two sources:
1. **Transaction fees:** These are fees from blockchain activity that are collected from the transactions
included in a block that was minted during that epoch and;
2. **Monetary expansion:** During each epoch, a fixed percentage of the remaining reserve is taken 
from the reserve pot and distributed as epoch rewards (e.g. 80%) and a part goes to treasury (e.g. 20%).

The following formula outlines how the rewards mechanism works. 
The available rewards amount, transaction fees, plus monetary expansion, is denoted by **R**. 

#### 1 - How much Rewards does a Stake Pool generate
First, the share of all available rewards that a specific pool can receive is determined with the following formula:

<img src="./public/images/reward_formula_1.png" alt="Logo" height="60">

- R - total available rewards for this epoch
- a0 - pledge influence factor (can be between 0 and infinity)
- z0 - relative pool saturation size, i.e. 0.2% based on a number of desired pools (k=500)
- σ - stake delegated to the pool (including stake pledged by the owners and stake delegated by others)
- σ’ = min(σ, z0) - as σ, but capped at z0 
- s - stake pledged by the owners 
- s’ = min(s, z0) - as s, but capped at z0

z0, σ and s are all relative, so they are fractions of the total supply, as they all lie between zero and one.

The rewards that are produced by this formula are then adjusted by pool performance: β/σ, 
where β is the fraction of all blocks produced by the pool during the epoch.

> [!IMPORTANT]  
> If a stake pool did not produce any blocks during the epoch, then it will not
> receive any rewards. This is important to understand why some pools do not distribute rewards
> in some epochs

#### 2 - How much Reward Goes to the Pool Operator

After pool rewards have been calculated and adjusted for pool performance, 
the rewards are then distributed amongst the pool operator and the individuals who delegated to the pool

First, the declared costs are subtracted and given to the pool operator. Next, the declared margin is subtracted and given to the pool operator

> [!IMPORTANT]  
> The Stake Pool's Fixed Fee gets paid first

#### 3 - How much Goes to Delegators
The remaining stake pool rewards, that were generated during the epoch, and that do not go to pay for
stake pool fees, gets distributed evenly amongst the delegators

#### 4 - Examples

A few example might help understand the importance of stake pool size on the economics for
stake pool operators and delegators

**A medium-sized stake pool (10 to 20mn ada stake)**

If a medium-sized stake pool minted 10 blocks during an epoch
- each block is worth ~400 ada, then the 
- total stake pool reward is 4,000 ada for the epoch.
- If a stake pools fixed fee is 340 ada and variable 2% then the
- stake pool operator will receive 340 + 2% (4,000 - 340) = 413.2 ada and the 
- remaining (4,000 - 413.2) = 3586.8 ada will be distributed amongst delegators.

So, in this stake pool, the pool
operator receives 413.2 / 4000 = 10.3% of all rewards and the rest goes to the delegators *

**A small stake pool ( <1mn ada stake)**

If a small stake pool minted 1 block during an epoch
- each block is worth ~400 ada, then the
- total stake pool reward is 400 ada for the epoch.
- If a stake pools fixed fee is 340 ada and variable 2% then the
- stake pool operator will receive 340 + 2% (400 - 340) = 341.2 ada and the
- remaining (400 - 341.2) = 58.8 ada will be distributed amongst delegators.

So, in this stake pool, the pool
operator receives 341.2 / 400 = 85.3% of all rewards and the rest goes to the delegators *

**A large stake pool (>30mn ada stake)**

If a large stake pool minted 30 blocks during an epoch
- each block is worth ~400 ada, then the
- total stake pool reward is 12,000 ada for the epoch.
- If a stake pools fixed fee is 340 ada and variable 2% then the
- stake pool operator will receive 340 + 2% (12,000 - 340) = 580 ada and the
- remaining (12,000 - 580) = 11,420 ada will be distributed amongst delegators.

So, in this stake pool, the pool
operator receives 580 / 12,000 = 4.8% of all rewards and the rest goes to the delegators *

**How the stake pool's size affects the delegators' rewards**

> [!IMPORTANT]  
> The size of the stake a pool has directly affects the number of blocks it mints in an epoch. 
> The higher the number of blocks minted the more of the total pool's rewards goes to the delegators.

'* the pool operators stake in the pool is considered to be one of the delegators


### Monte Carlo
Monte Carlo is an algorithm that relies on repeated random number sampling to estimate numerical resulsts. It is often used
in finance and engineering to estimate a results for which a closed form solutions doesn't exist or is too difficult to derived.
It is also often used to explain to the end user the final results as, if explained clearly, it can be easier to understand
than a mathematical derivation

We used Monte Carlo in the calculator because:
- It makes the estimate of the staking reward more accurate
- It explains why there is difference in reward for stake pools with different saturation
- It shows the factor that luck plays when delegating to stake pools with a smaller saturation

#### Binomial CDF
The Binomial Cumulative Distribution Function (CDF) is the center-piece of the monte carlo simulation. It tells us
the probability that at most N number of blocks will be minted by a staking pool in a given epoch
out of ~21,600 possible blocks.

A wikipedia article on what the <a href="https://en.wikipedia.org/wiki/Binomial_distribution">Binomial distribution</a> is a useful refresher

The Binomial CDF is implemented in `utils.js`

#### Optimization

Computing the Binomial CDF for each epoch in each monte carlo simulation becomes computationally heavy, particularly
on slower devices (as all computation is performed in the front-end). To speed up the computation we made 2 assumptions
and that allowed us to reduce the time taken by a factor of 10x:
- create an array with [n blocks, probability from CDF] at beginning of the simulation
- generate a random number from 0 to 1 at each epoch
- lookup the number of blocks expected to generate using that array



### Frontend vs. Backend

All the calculation logic of the calculator
is coded in the front end and is available as source code in this repo.

When the user opens the Frontend, it queries the state of the blockchain from a blockchain
indexer (that we can call the Backend). We have opted to use <a href="https://koios.rest/">Koios</a>
as our Backend as it is free and maintained by the community

The following endpoints are used by the Backend:

- Chain Tip - https://api.koios.rest/#get-/tip
- Protocol Parameters - https://api.koios.rest/#get-/cli_protocol_params
- Epoch Info - https://api.koios.rest/api/v1/epoch_info
- Cardano Reserves - https://api.koios.rest/#get-/totals
- List of All Stake Pool - https://api.koios.rest/#get-/pool_list
- Stake Pool Info - https://api.koios.rest/#post-/pool_info
- Stake Pool Updates - https://api.koios.rest/#get-/pool_updates


All the calculator's logic, including the Monte Carlo simulations, is coded in the Frontend, there are no 
hidden offline calculation derived from the backend. The backend's purpose is to provide the current
blockchain status as an input into the calculator




## Troubleshooting

### Stake Pools with Insufficient Pledge
It sometimes happens that the amount of live pledge a pool has deposited on-chain is less than
what it has declared (promised to its delegators). This can happen as a result of the pool
operator withdrawing some of the pledge intentionally (e.g. to cover expenses), or
unintentionally (e.g. declared an incorrect pledge amount).

When the live pledge is less than the declared pledge, then the stake pool will not mint
blocks and will not generate rewards for its delegators. When selected in the calculator, these pools
will be shown with a red border

<img src="public/images/redflag_printscreen.png" alt="Stake pool redflag example" width="400">


### CORS issues
When developing on local computer and connecting to external APIs (such as Koios), 
the web browser may stop you from making those requests as a security measure.

Run this in a separate terminal to avoid issues with CORS when running in a local environment.

#### Install local-cors-proxy

```shell
npm install -g local-cors-proxy
```

#### Run a local cors proxy

```shell
lcp --proxyUrl https://api.koios.rest/api/v1 --port 7070
```

This will launch a local proxy server on `http://localhost:7070/proxy` which will reroute all the API requests to Koios.
So the code you will need to make requests to the localhost



### Info Sections
Helper information for the end user is provided in the front-end app is provided via:
- Clickable "i" icons next each filed which pop-up with a short description of that field
- Info sections with a longer description / links to external content describing what the purpose of each section

The content for these info sections is stored in html format in the file `infos.js`


## Disclaimer

### Algorithm
The algorithm and the calculations of the rewards are
performed in the front-end application and relies on
publicly available information. The front-end connects to a back-end
service to retrieve the current blockchain state and stake pool information.


### Limitations
The implementation favors usability and efficiency and does not conform to the strict 
implementation standards of the Cardano code.
The implementation is done primarily in JavaScript using the ReactJS front-end
framework. Javascript is not a high numeric precision language and
therefore rounding errors can occur during computation. This is considered
to be an acceptable trade-off as the main goal of the application is to
inform users of the future expected rewards from staking and how these
change if blockchain or stake pool parameters are amended rather than a
precise calculation of historic rewards.



## Tests

### Binomial CDF

Test the accuracy of the Binomial CDF computed in Javascript by
comparing it to what is computed by the Scipy library in Python

List conda environments:
`conda env list`

Activate conda environment:
`conda activate py_binom`

Export conda environment definition:
`conda env export > conda_environment.yml`

Create conda environment from file:
`conda env create --file=conda_environments.yml`


<!-- MARKDOWN LINKS & IMAGES -->
[Tailwindcss]: https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white
[Tailwindcss-url]: https://tailwindcss.com/
[Axios]: https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white
[Axios-url]: https://axios-http.com/
[ReactJS]: https://img.shields.io/badge/react-5A29E4?style=for-the-badge&logo=react&logoColor=white
[ReactJS-url]: https://react.dev/
[Node.js]: https://img.shields.io/badge/nodedotjs-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/
[Cardano]: https://img.shields.io/badge/cardano-0133AD?style=for-the-badge&logo=cardano&logoColor=white
[Cardano-url]: https://cardano.org/
[BlueprintJS]: https://img.shields.io/badge/blueprint-137CBD?style=for-the-badge&logo=blueprint&logoColor=white
[BlueprintJS-url]: https://blueprintjs.com/
