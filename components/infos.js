/**
 * This file holds a dictionary of explanation for each of the
 * calculator's fields. They are populated in the small "i"
 * icons next to fields in the calculator
 */

export const infoHovers = {

	"monte_carlo": {
		"en": [
			<div key="monte_carlo_en" className="space-y-2">
				<h4 className="text-lg font-medium">Expected Return</h4>
				<p>Expected returs are shown as an average and tails of the distribution:</p>
				<ul className="list-disc pl-6 font-medium space-y-2">
					<li>Lower - 10th Percentile</li>
					<li>Average</li>
					<li>Upper - 90th Percentile</li>
				</ul>
				<p>Blocks are randomly assigned to stake
					pools at each epoch and there can be instances where a some
					pool gets more (or less) block in a year just from luck alone</p>
			</div>
		],
		"jp": [
			<div key="monte_carlo_jp" className="space-y-2">
				<h4 className="text-lg font-medium">期待リターン</h4>
				<p>期待されるリターンは、分布の平均と裾として表示されます。</p>
				<ul className="list-disc pl-6 font-medium space-y-2">
					<li>下位 - 10 パーセンタイル</li>
					<li>平均</li>
					<li>上位 - 90 パーセンタイル</li>
				</ul>
				<p>
					ブロックはランダムにステークに割り当てられます
					各エポックでプールが作成され、いくつかの
					プールは運だけで年間でより多くの（またはより少ない）ブロックを取得します</p>
			</div>
		]
	} ,



	"pool_pledge": {
		"en": [
			<div key="pool_pledge_en" className="space-y-2">
				<h4 className="text-lg font-medium">Pool Pledge</h4>
				<p>The amount of ADA the stake pool operator commits to their own pool as a form of &quot;skin in the game&quot;.</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Pools with higher pledges potentially earn slightly higher rewards through the &quot;a0&quot; parameter in the reward formula</li>
					<li>Higher pledges show higher monetary commitments from the pool operator</li>
				</ul>
			</div>
		],
		"jp": [
			<div key="pool_pledge_jp" className="space-y-2">
				<h4 className="text-lg font-medium">プール誓約 (Pool Pledge)</h4>
				<p>ステークプール運営者が自分のプールにコミットするADAの量。「リスク共有」の一形態です。</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>誓約額が高いプールは、報酬計算式の「a0」パラメータによって、やや高い報酬を得る可能性があります。</li>
					<li>高い誓約額は、プール運営者の強い資金的コミットメントを示します。</li>
				</ul>
			</div>
		],
	},


	"delegator_stake": {
		"en": [
			<div key="delegator_stake_en" className="space-y-2">
				<h4 className="text-lg font-medium">Delegators&apos; Stake</h4>
				<p>The total amount of ADA that other users (delegators) have staked to this pool.</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>The more ADA staked by delegators, the higher the pool’s likelihood of being selected to produce blocks and earning rewards.</li>
					<li>Pools with higher delegated stake tend to produce more blocks and generate more rewards, but this needs to be weighted aginst
						the fees that they charge</li>
				</ul>
			</div>
		],
		"jp": [
			<div key="delegator_stake_jp" className="space-y-2">
				<h4 className="text-lg font-medium">委任者のステーク (Delegators&apos; Stake)</h4>
				<p>他のユーザー（委任者）がこのプールにステークしたADAの総額。</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>委任者によってステークされるADAが多いほど、プールがブロック生成に選ばれ、報酬を獲得する可能性が高くなります。</li>
					<li>より多くのステークを集めたプールは、より多くのブロックを生成し、より多くの報酬を生み出す傾向がありますが、運営手数料とのバランスを考慮する必要があります。</li>
				</ul>
			</div>
		]
	} ,

	"total_pool_stake": {
		"en": [
			<div key="total_pool_stake_en" className="space-y-2">
				<h4 className="text-lg font-medium">Total Pool Stake</h4>
				<p>The combined amount of ADA in the pool, including the operator&apos;s pledge and the delegators&apos; stake.
					This is the total ADA that the pool uses to participate in block production and earn rewards.</p>
				<p>Pools with higher stake will get to mint more blocks and receive more fees. These fees will need to be
					split between the pool operator and all the delegators.</p>
			</div>
		],
		"jp": [
			<div key="total_pool_stake_jp" className="space-y-2">
				<h4 className="text-lg font-medium">総プールステーク (Total Pool Stake)</h4>
				<p>
					プール内のADAの合計額であり、運営者の誓約と委任者のステークを含みます。
					これは、プールがブロック生成に参加し、報酬を獲得するために使用する総ADA量です。
				</p>
				<p>
					ステークが多いプールは、より多くのブロックを生成し、より多くの手数料を獲得できます。
					これらの手数料は、プール運営者とすべての委任者で分配されます。
				</p>
			</div>
		]
	} ,

	"pool_fixed_costs": {
		"en": [
			<div key="pool_fixed_costs_en" className="space-y-2">
				<h4 className="text-lg font-medium">Pool Fixed Costs</h4>
				<p>A minimum fee that the stake pool operator deducts from the rewards each epoch for running the pool.This fee gets paid first,
					before any rewards are distributed to the delegators. The operator might use this to offset the fixed costs of maintaining the
					infrastructure (e.g. servers, networking, redundancies ...)</p>
				<p>If the pool does not produce any blocks during an epoch then there are no fees. In this case the delegators do not get charged and
					the next epoch starts afresh.</p>
			</div>
		],
		"jp": [
			<div key="pool_fixed_costs_jp" className="space-y-2">
				<h4 className="text-lg font-medium">プール固定費 (Pool Fixed Costs)</h4>
				<p>
					ステークプール運営者が、プール運営のために各エポックの報酬から差し引く最低手数料です。
					この手数料は最初に差し引かれ、その後に報酬が委任者へ分配されます。
					運営者は、この手数料をインフラ維持のための固定費（例: サーバー、ネットワーク、冗長化 など）に充てる場合があります。
				</p>
				<p>
					もしプールがエポック内でブロックを生成しなかった場合、手数料は発生しません。
					この場合、委任者に対する課金もなく、次のエポックが新たに開始されます。
				</p>
			</div>
		]
	} ,

	"pool_variable_fee": {
		"en": [
			<div key="pool_variable_fee_en" className="space-y-2">
				<h4 className="text-lg font-medium">Pool Variable Fee</h4>
				<p>A percentage of the total rewards earned by the pool, that the operator takes as a fee.</p>
				<p>Delegators receive the remaining rewards after fixed costs and variable fees are deducted.
					Value shown as a percentage multiplied by 100</p>
			</div>
		],
		"jp": [
			<div key="pool_variable_fee_jp" className="space-y-2">
				<h4 className="text-lg font-medium">プール変動手数料 (Pool Variable Fee)</h4>
				<p>プールが獲得した総報酬のうち、運営者が手数料として受け取る割合です。</p>
				<p>
					固定費と変動手数料が差し引かれた後、残りの報酬が委任者に分配されます。
					値はパーセンテージ（100倍された値）で表示されます。
				</p>
			</div>
		]
	} ,


	"rho": {
		"en": [
			<div key="rho_en" className="space-y-2">
				<h4 className="text-lg font-medium">Rho - Monetary Expansion</h4>
				<p>A % of the Reserve that goes towards paying Staking Reward in each epoch (e.g. 0.003 is 0.3%)</p>
			</div>
		],
		"jp": [
			<div key="rho_jp" className="space-y-2">
				<h4 className="text-lg font-medium">ρ（ロー）- 通貨供給拡大 (Monetary Expansion)</h4>
				<p>各エポックでステーキング報酬の支払いに充てられるリザーブの割合（例: 0.003 は 0.3%）。</p>
			</div>
		]
	} ,

	"tau": {
		"en": [
			<div key="tau_en" className="space-y-2">
				<h4 className="text-lg font-medium">Tau - Distribution to Treasury</h4>
				<p>A of the % Reward that goes towards Treasury in each epoch (e.g. 20%)</p>
			</div>
		],
		"jp": [
			<div key="tau_jp" className="space-y-2">
				<h4 className="text-lg font-medium">τ（タウ）- 財務への分配 (Distribution to Treasury)</h4>
				<p>各エポックで財務（トレジャリー）に割り当てられる報酬の割合（例: 20%）。</p>
			</div>
		]
	} ,

	"k": {
		"en": [
			<div key="k_en" className="space-y-2">
				<h4 className="text-lg font-medium">K - Optimal Number of Pools</h4>
				<p>Optimal number of fully saturated pools (e.g. 500). This number determines the level of pool stake beyond
					which the staking reward starts to decrease. This limits how big a single pool can economically become.</p>
				<p>Given the relative ease with which it is to set-up new stake pools, this parameter rarely becomes a
					constraining factor</p>
			</div>
		],
		"jp": [
			<div key="k_jp" className="space-y-2">
				<h4 className="text-lg font-medium">K - 最適プール数 (Optimal Number of Pools)</h4>
				<p>
					完全に飽和したプールの最適な数（例: 500）。この数値は、ステーキング報酬が減少し始めるプールステークの上限を決定します。
					これにより、単一のプールが経済的にどれほど大きくなるかが制限されます。
				</p>
				<p>
					新しいステークプールを設定するのが比較的簡単なため、このパラメータが制約要因になることは稀です。
				</p>
			</div>
		]
	} ,

	"a0": {
		"en": [
			<div key="a0_en" className="space-y-2">
				<h4 className="text-lg font-medium">a0 - Pledge Influence Factor</h4>
				<p>Determines how much the size of a stake pool&apos;s pledge influences the rewards distribution.
					It serves as an incentive mechanism to encourage stake pool operators to pledge more ADA to their pools.</p>
			</div>
		],
		"jp": [
			<div key="a0_jp" className="space-y-2">
				<h4 className="text-lg font-medium">a0 - 誓約影響係数 (Pledge Influence Factor)</h4>
				<p>
					ステークプールの誓約の大きさが報酬分配にどれほど影響するかを決定します。
					これは、ステークプール運営者が自分のプールにもっとADAを誓約するよう促すインセンティブ機構として機能します。
				</p>
			</div>
		]
	} ,

	"z0": {
		"en": [
			<div key="z0_en" className="space-y-2">
				<h4 className="text-lg font-medium">z0 - 1/a0</h4>
				<p>This is a transformation of the a0 parameter for the rewards formula</p>
			</div>
		],
		"jp": [
			<div key="z0_jp" className="space-y-2">
				<h4 className="text-lg font-medium">z0 - 1/a0</h4>
				<p>これは報酬計算式のためにa0パラメータを変換したものです。</p>
			</div>
		]
	} ,

	"days_in_epoch": {
		"en": [
			<div key="days_in_epoch_en" className="space-y-2">
				<h4 className="text-lg font-medium">Days in an Epoch</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="days_in_epoch_jp" className="space-y-2">
				<h4 className="text-lg font-medium">エポックの日数 (Days in an Epoch)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"epochs_in_year": {
		"en": [
			<div key="epochs_in_year_en" className="space-y-2">
				<h4 className="text-lg font-medium">Epochs in a Year</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="epochs_in_year_jp" className="space-y-2">
				<h4 className="text-lg font-medium">1年あたりのエポック数 (Epochs in a Year)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"slots_in_epoch": {
		"en": [
			<div key="slots_in_epoch_en" className="space-y-2">
				<h4 className="text-lg font-medium">Slots in an Epoch</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="slots_in_epoch_jp" className="space-y-2">
				<h4 className="text-lg font-medium">エポック内のスロット数 (Slots in an Epoch)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"chain_density": {
		"en": [
			<div key="chain_density_en" className="space-y-2">
				<h4 className="text-lg font-medium">Chain Density</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="chain_density_jp" className="space-y-2">
				<h4 className="text-lg font-medium">チェーン密度 (Chain Density)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"blocks_in_epoch": {
		"en": [
			<div key="blocks_in_epoch_en" className="space-y-2">
				<h4 className="text-lg font-medium">Blocks in an Epoch</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="blocks_in_epoch_jp" className="space-y-2">
				<h4 className="text-lg font-medium">エポック内のブロック数 (Blocks in an Epoch)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"max_ada_supply": {
		"en": [
			<div key="max_ada_supply_en" className="space-y-2">
				<h4 className="text-lg font-medium">Max Ada Supply</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="max_ada_supply_jp" className="space-y-2">
				<h4 className="text-lg font-medium">最大ADA供給量 (Max Ada Supply)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"current_ada_supply": {
		"en": [
			<div key="current_ada_supply_en" className="space-y-2">
				<h4 className="text-lg font-medium">Current Ada Supply</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="current_ada_supply_jp" className="space-y-2">
				<h4 className="text-lg font-medium">現在のADA供給量 (Current Ada Supply)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"reserve_ada": {
		"en": [
			<div key="reserve_ada_en" className="space-y-2">
				<h4 className="text-lg font-medium">Reserve ADA</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="reserve_ada_jp" className="space-y-2">
				<h4 className="text-lg font-medium">リザーブADA (Reserve ADA)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"total_staked_ada": {
		"en": [
			<div key="total_staked_ada_en" className="space-y-2">
				<h4 className="text-lg font-medium">Total Staked ADA</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="total_staked_ada_jp" className="space-y-2">
				<h4 className="text-lg font-medium">総ステークADA (Total Staked ADA)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"fees_in_epoch": {
		"en": [
			<div key="fees_in_epoch_en" className="space-y-2">
				<h4 className="text-lg font-medium">ADA Fees in an Epoch</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="fees_in_epoch_jp" className="space-y-2">
				<h4 className="text-lg font-medium">エポック内のADA手数料 (ADA Fees in an Epoch)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"distribution_from_reserve": {
		"en": [
			<div key="distribution_from_reserve_en" className="space-y-2">
				<h4 className="text-lg font-medium">ADA Distributed from Reserve</h4>
				<p>A portion (rho) is distributed from Cardano Reserve to pay for Staking Rewards each Epoch. This number will reduce gradually over time
					as the amount in the Reserve gets depleted. To maintain the same level of staking rewards the rewards from Fees will need to rise.</p>
				<p>Change the Rho parameter to see how this affects the total reward to delegators</p>
			</div>
		],
		"jp": [
			<div key="distribution_from_reserve_jp" className="space-y-2">
				<h4 className="text-lg font-medium">リザーブから分配されるADA (ADA Distributed from Reserve)</h4>
				<p>
					一部（ρ）がカルダノリザーブから分配され、各エポックのステーキング報酬の支払いに充てられます。
					この数値は、リザーブ内の残高が減少するにつれて、徐々に減少します。
					同じレベルのステーキング報酬を維持するためには、手数料からの報酬が増加する必要があります。
				</p>
				<p>
					Rhoパラメータを変更して、これが委任者への総報酬にどのように影響するかを確認してください。
				</p>
			</div>
		]
	} ,

	"gross_rewards": {
		"en": [
			<div key="gross_rewards_en" className="space-y-2">
				<h4 className="text-lg font-medium">Gross Rewards</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="gross_rewards_jp" className="space-y-2">
				<h4 className="text-lg font-medium">総報酬 (Gross Rewards)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"distribution_to_treasury": {
		"en": [
			<div key="distribution_to_treasury_en" className="space-y-2">
				<h4 className="text-lg font-medium">Distribution to Treasury</h4>
				<p>....</p>
			</div>
		],
		"jp": [
			<div key="distribution_to_treasury_jp" className="space-y-2">
				<h4 className="text-lg font-medium">財務への分配 (Distribution to Treasury)</h4>
				<p>....</p>
			</div>
		]
	} ,

	"net_rewards_to_pools": {
		"en": [
			<div key="net_rewards_to_pools_en" className="space-y-2">
				<h4 className="text-lg font-medium">Net Rewards to Pools</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="net_rewards_to_pools_jp" className="space-y-2">
				<h4 className="text-lg font-medium">プールへの純報酬 (Net Rewards to Pools)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"staking_reward_per_year_ada": {
		"en": [
			<div key="staking_reward_per_year_ada_en" className="space-y-2">
				<h4 className="text-lg font-medium">Staking Reward per Year ADA</h4>
				<p>Expected reward in ADA per year for the amount staked.</p>
				<p>Number in grey shows the result from the previous simulation, for comparability between simulations with different parameters</p>
			</div>
		],
		"jp": [
			<div key="staking_reward_per_year_ada_jp" className="space-y-2">
				<h4 className="text-lg font-medium">年間ステーキング報酬 ADA (Staking Reward per Year ADA)</h4>
				<p>ステークされた量に対する年間予想報酬（ADA）。</p>
				<p>灰色の数字は、異なるパラメータでのシミュレーション間で比較できるように、前回のシミュレーション結果を示しています。</p>
			</div>
		]
	} ,

	"staking_reward_annualized_perc": {
		"en": [
			<div key="staking_reward_annualized_perc_en" className="space-y-2">
				<h4 className="text-lg font-medium">Annualized Staking Reward</h4>
				<p>Expected reward in % terms per year for the amount staked.</p>
				<p>Number in grey shows the result from the previous simulation, for comparability between simulations with different parameters</p>
			</div>
		],
		"jp": [
			<div key="staking_reward_annualized_perc_jp" className="space-y-2">
				<h4 className="text-lg font-medium">年間化ステーキング報酬 (Annualized Staking Reward)</h4>
				<p>ステークされた量に対する年間予想報酬（%で表示）。</p>
				<p>灰色の数字は、異なるパラメータでのシミュレーション間で比較できるように、前回のシミュレーション結果を示しています。</p>
			</div>
		]
	} ,

}

/**
 * These are the info boxes placed next to the large sections of the calculator
 * - Amount of ADA to sake (section 1)
 * - Stake Pools (section 2)
 * - Stake Pool Parameters (section 3)
 * - Blockchain Parameters (section 4)
 */

export const infoSections = {

	"info_section_1": {
		"en": [
			<div key="info_section_1_en" className="space-y-2">
				<h4 className="text-md font-medium">Info</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="info_section_1_jp" className="space-y-2">
				<h4 className="text-md font-medium">情報 (じょうほう, jōhō)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"info_section_2": {
		"en": [
			<div key="info_section_2_en" className="space-y-2">
				<h4 className="text-md font-medium">Info</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="info_section_2_jp" className="space-y-2">
				<h4 className="text-md font-medium">情報 (じょうほう, jōhō)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"info_section_3": {
		"en": [
			<div key="info_section_3_en" className="space-y-2">
				<h4 className="text-md font-medium">Info</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="info_section_3_jp" className="space-y-2">
				<h4 className="text-md font-medium">情報 (じょうほう, jōhō)</h4>
				<p>...</p>
			</div>
		]
	} ,

	"info_section_4": {
		"en": [
			<div key="info_section_4_en" className="space-y-2">
				<h4 className="text-md font-medium">Info</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="info_section_4_jp" className="space-y-2">
				<h4 className="text-md font-medium">情報 (じょうほう, jōhō)</h4>
				<p>...</p>
			</div>
		]
	} ,

}
