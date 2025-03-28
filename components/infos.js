/**
 * This file holds a dictionary of explanation for each of the
 * calculator's fields. They are populated in the small "i"
 * icons next to fields in the calculator
 */

export const uiText = {
	"amount_ada_to_stake": {
		"en": [
			<div key="amount_ada_to_stake_en">
				Amount of ada to stake
			</div>
		],
		"jp": [
			<div key="amount_ada_to_stake_jp">
				ステークするADAの量
			</div>
		],
		"de": [
			<div key="amount_ada_to_stake_de">
				Höhe des ADA Stakes
			</div>
		]

	},

	"amount_ada_to_stake_desc": {
		"en": [
			<div key="amount_ada_to_stake_desc_en">
				Enter the amount of ada you would like to stake.
			</div>
		],
		"jp": [
			<div key="amount_ada_to_stake_desc_jp">
				ステークしたいADAの金額を入力してください。
			</div>
		],
		"de": [
			<div key="amount_ada_to_stake_desc_de">
				Gib den ADA-Betrag ein, den du einsetzen möchtest:
			</div>
		]
	},

	"loading_stake_pools_label": {
		"en": [
			<div key="loading_stake_pools_label_en">
				loading stake pools ...
			</div>
		],
		"jp": [
			<div key="loading_stake_pools_label_jp">
				ステークプールを読み込み中...
			</div>
		],
		"de": [
			<div key="loading_stake_pools_label_de">
				Stake Pools werden geladen ...
			</div>
		]
	},

	"staking_rewards_per_year_ada_label": {
		"en": [
			<div key="staking_rewards_per_year_ada_label_en">
				Staking Reward per year ada
			</div>
		],
		"jp": [
			<div key="staking_rewards_per_year_ada_label_jp">
				年間のADAのステーキング報酬
			</div>
		],
		"de": [
			<div key="staking_rewards_per_year_ada_label_de">
				Staking Erträge pro Jahr
			</div>
		]
	},

	"annualized_staking_reward_label": {
		"en": [
			<div key="annualized_staking_reward_label_en">
				Annualized Staking Reward
			</div>
		],
		"jp": [
			<div key="annualized_staking_reward_label_jp">
				年間ステーキング報酬
			</div>
		],
		"de": [
			<div key="annualized_staking_reward_label_de">
				Jährliche Staking Erträge
			</div>
		]
	},

	"stake_pool_section_title": {
		"en": [
			<div key="stake_pool_section_title_en">
				Staking Pools
			</div>
		],
		"jp": [
			<div key="stake_pool_section_title_jp">
				ステーキングプール
			</div>
		],
		"de": [
			<div key="stake_pool_section_title_de">
				Staking Pools
			</div>
		]
	},

	"stake_pool_section_desc": {
		"en": [
			<div key="stake_pool_section_desc_en">
				Compare up to 3 stake pools. See how much you can expect to earn.
				A Monte Carlo simulation is used to account for the luck factor and
				shows the expected low, medium and high return for each pool.
			</div>
		],
		"jp": [
			<div key="stake_pool_section_desc_jp">
				最大3つのステークプールを比較できます。
				オペレーターおよびデリゲーター（あなた）のステーキング報酬の予測額を確認できます。
				モンテカルロシミュレーションを使用して運の要素を考慮し、それぞれのプールの予想される低・中・高の報酬を表示します。
			</div>
		],
		"de": [
			<div key="stake_pool_section_desc_de">
				Vergleiche bis zu drei Stake Pools und finde heraus, wie viel du voraussichtlich verdienen kannst.
				Durch eine Monte-Carlo-Simulation wird der Glücksfaktor berücksichtigt, sodass du für jeden Pool eine mögliche niedrige, mittlere und hohe Rendite siehst.
			</div>
		]
	},

	"stake_pool_parameters_section_title": {
		"en": [
			<div key="stake_pool_parameters_section_title_en">
				Stake Pool Parameters
			</div>
		],
		"jp": [
			<div key="stake_pool_parameters_section_title_jp">
				ステークプールのパラメーター
			</div>
		],
		"de": [
			<div key="stake_pool_parameters_section_title_de">
				Stake Pool Parameter
			</div>
		]
	},

	"stake_pool_parameters_section_desc": {
		"en": [
			<div key="stake_pool_parameters_section_desc_en">
				These parameters are specific to each stake pool and affect how rewards are
				distributed between the pool operator and delegators, as well as how many
				blocks the pool is expected to mint each epoch. Expand to change these
				parameters and see the effect on rewards.
			</div>
		],
		"jp": [
			<div key="stake_pool_parameters_section_desc_jp">
				これらのパラメーターは各ステークプールに固有のものであり、プールの運営者とデリゲーター
				（委任者）の間で報酬がどのように分配されるか、また各エポックで
				プールがどれだけのブロックを生成するかに影響を与えます。
				パラメーターを変更して、報酬への影響を確認してください。
			</div>
		],
		"de": [
			<div key="stake_pool_parameters_section_desc_de">
				Diese Parameter sind für jeden Stake Pool einzigartig und bestimmen,
				wie die Erträge zwischen dem Betreiber und den Delegierenden aufgeteilt werden.
				Außerdem beeinflussen sie, wie viele Blöcke der Pool pro Epoche voraussichtlich validiert.
				Klick auf das Plus, um die Parameter anzupassen.
			</div>
		]
	},


	"blockchain_params_section_title": {
		"en": [
			<div key="blockchain_params_section_title_en">
				Blockchain Parameters
			</div>
		],
		"jp": [
			<div key="blockchain_params_section_title_jp">
				ブロックチェーンパラメーター
			</div>
		],
		"de": [
			<div key="blockchain_params_section_title_de">
				Blockchain Parameter
			</div>
		]
	},

	"blockchain_params_section_desc": {
		"en": [
			<div key="blockchain_params_section_desc_en">
				These parameters are specific to the Cardano blockchain and affect the total
				size of the reward &quot;pot&quot; available for distribution, and how it is distributed
				to different pools. Some parameters can be changed by community vote
				(dynamic parameters), while others can&apos;t be changed at all (static parameters).
			</div>
		],
		"jp": [
			<div key="blockchain_params_section_desc_jp">
				これらのパラメーターはCardanoブロックチェーンに特有のもので、配布可能な報酬の「ポット」
				の総額や、それが異なるプールにどのように分配されるかに影響を与えます。
				一部のパラメーターはコミュニティの投票によって変更可能（動的パラメーター）
				ですが、一部のパラメーターは全く変更できません（静的パラメーター）
			</div>
		],
		"de": [
			<div key="blockchain_params_section_desc_de">
				Diese Parameter sind spezifisch für die Cardano-Blockchain und bestimmen,
				wie groß der verfügbare "Belohnungstopf" ist und wie die Rewards auf die verschiedenen
				Pools verteilt werden. Einige davon können durch Community-Abstimmungen geändert werden
				(dynamische Parameter), während andere festgelegt und unveränderlich sind (statische Parameter).
			</div>
		]
	},

	"dynamic_params_section_title": {
		"en": [
			<div key="dynamic_params_section_title_en">
				Dynamic Parameters
			</div>
		],
		"jp": [
			<div key="dynamic_params_section_title_jp">
				動的パラメーター
			</div>
		],
		"de": [
			<div key="dynamic_params_section_title_de">
				Dynamische Parameter
			</div>
		]
	},

	"dynamic_params_section_desc": {
		"en": [
			<div key="dynamic_params_section_desc_en">
				Dynamic blockchain parameters can be adjusted through governance processes.
				These parameters can be used to change the operation of the block-producing protocol,
				vary transaction fees, define the influence of pledges, etc.
				Click the (i) icon to see what each is responsible for.
			</div>
		],
		"jp": [
			<div key="dynamic_params_section_desc_jp">
				動的なブロックチェーンパラメーターは、ガバナンスプロセスを通じて調整できます。
				これらのパラメーターは、ブロック生成プロトコルの動作を変更したり、取引手数料を調整したり、
				誓約の影響度を定義したりするために使用されます。
				各パラメーターの役割を確認するには、(i) アイコンを押してください。
			</div>
		],
		"de": [
			<div key="dynamic_params_section_desc_de">
				Dynamische Blockchain-Parameter können durch Governance-Prozesse angepasst werden.
				Sie beeinflussen unter anderem die Blockproduktion, Transaktionsgebühren und den Einfluss des Eigenkapitals.
				Klick auf das (i)-Symbol, um mehr über die einzelnen Parameter zu erfahren.
			</div>
		]
	},

	"static_params_section_title": {
		"en": [
			<div key="static_params_section_title_en">
				Static Parameters
			</div>
		],
		"jp": [
			<div key="static_params_section_title_jp">
				静的パラメーター
			</div>
		],
		"de": [
			<div key="static_params_section_title_de">
				Statische Parameter
			</div>
		]
	},

	"static_params_section_desc": {
		"en": [
			<div key="static_params_section_desc_en">
				Static parameters affect the fundamentals of the Cardano protocol and are stable,
				which means that they cannot be changed except by a hard fork.
				Static parameters include, for example, those that define the genesis block or basic security properties.
				Some of these parameters can be embedded in the source code or implemented as software.
			</div>
		],
		"jp": [
			<div key="static_params_section_desc_jp">
				静的パラメータはCardanoプロトコルの基本に影響を与え、安定しており、ハードフォークを通じてのみ変更可能です。
				静的パラメータには、ジェネシスブロックや基本的なセキュリティ特性を定義するものが含まれます。
				これらのパラメータのいくつかは、ソースコードに埋め込まれているか、ソフトウェアとして実装されています。
			</div>
		],
		"de": [
			<div key="static_params_section_desc_de">
				Statische Parameter beeinflussen die Grundlagen des Cardano-Protokolls und sind stabil, das heißt,
				sie können nur durch einen Hard Fork geändert werden. Dazu gehören beispielsweise Parameter, die den
				Genesis-Block oder grundlegende Sicherheitsmerkmale definieren. Einige dieser Parameter sind im Quellcode
				verankert oder als Software implementiert.
			</div>
		]
	},

	"fees_section_title": {
		"en": [
			<div key="fees_section_title_en">
				Fees & Remaining Reserves
			</div>
		],
		"jp": [
			<div key="fees_section_title_jp">
				料金と残りのリザーブ
			</div>
		],
		"de": [
			<div key="fees_section_title_de">
				Gebühren und Rücklagen
			</div>
		]
	},

	"fees_section_desc": {
		"en": [
			<div key="fees_section_desc_en">
				Cardano uses a transaction fee system that covers the cost of processing
				and long-term storage costs of transactions. The fees from each epoch are pooled and then
				and then distributed to all pools that created blocks during that epoch. The fees are supplemented
				by a distribution of a % (rho) from reserves.
			</div>
		],
		"jp": [
			<div key="fees_section_desc_jp">
				Cardanoは、取引の処理および長期保存費用をカバーする取引手数料システムを使用しています。
				各エポックの手数料はプールされ、その後、エポック中にブロックを作成したすべてのプールに分配されます。
				手数料は、リザーブからの一定の割合（rho）の分配によって補完されます。
			</div>
		],
		"de": [
			<div key="fees_section_desc_de">
				Cardano verwendet ein Transaktionsgebührensystem, dass die Kosten für die Verarbeitung und langfristige
				Speicherung von Transaktionen abdeckt. Die Gebühren jeder Epoche werden gesammelt und an alle Pools verteilt,
				die in dieser Epoche Blöcke erstellt haben. Zusätzlich wird die Epochenbelohnung durch eine Ausschüttung eines
				bestimmten Prozentsatzes (rho) aus den Reserven ergänzt.
			</div>
		]
	},
}


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
				<p>期待されるリターンは、分布の平均値と尾部（裾）で表示されます。</p>
				<ul className="list-disc pl-6 font-medium space-y-2">
					<li>下位 - 10 パーセンタイル</li>
					<li>平均</li>
					<li>上位 - 90 パーセンタイル</li>
				</ul>
				<p>
					ブロックはエポックごとにランダムにステーキングプールへ割り当てられ、
					運次第で一部のプールは1年間に多く（あるいは少なく）の
					ブロックを獲得することがあります。</p>
			</div>
		],
		"de": [
			<div key="monte_carlo_jp" className="space-y-2">
				<h4 className="text-lg font-medium">Zu erwartete Rendite</h4>
				<p>Die zu erwarteten Renditen werden als Durchschnitt und als Enden der Verteilung angezeigt:</p>
				<ul className="list-disc pl-6 font-medium space-y-2">
					<li>Unteres - 10. Perzentil</li>
					<li>Durchschnitt</li>
					<li>Oberes 90. Perzentil</li>
				</ul>
				<p>Blöcke werden in jeder Epoche zufällig an Stake Pools vergeben.
					Dadurch kann es vorkommen, dass einige Pools allein durch Glück über ein Jahr hinweg mehr oder
					weniger Blöcke erhalten.</p>
			</div>
		]
	},



	"pool_pledge": {
		"en": [
			<div key="pool_pledge_en" className="space-y-2">
				<h4 className="text-lg font-medium">Pool Pledge</h4>
				<p>The amount of ada the stake pool operator commits to their own pool as a form of &quot;skin in the game&quot;.</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Pools with higher pledges potentially earn slightly higher rewards through the &quot;a0&quot; parameter in the reward formula</li>
					<li>Higher pledges show higher monetary commitments from the pool operator</li>
				</ul>
			</div>
		],
		"jp": [
			<div key="pool_pledge_jp" className="space-y-2">
				<h4 className="text-lg font-medium">プール誓約 (Pool Pledge)</h4>
				<p>ステークプール運営者が自身のプールに対してコミットするADAの量であり、これは「自己出資額」としての役割を果たします</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>誓約額が高いプールは、報酬計算式の「a0」パラメータによって、やや高い報酬を得る可能性があります。</li>
					<li>高い誓約額は、プール運営者の強い資金的コミットメントを示します。</li>
				</ul>
			</div>
		],
		"de": [
			<div key="pool_pledge_jp" className="space-y-2">
				<h4 className="text-lg font-medium">Eigenkapital (Pool Pledge)</h4>
				<p>Den Betrag an ADA, den der Stake Pool Betreiber in seinem eigenen Pool min. hinterlegt.</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Pools mit einem höheren Eigenkapital können durch den "a0"-Parameter in der Belohnungsformel potenziell etwas höhere Belohnungen erhalten.</li>
					<li>Ein höheres Eigenkapital zeigt ein starkes finanzielle Verpflichtung des Pool-Betreibers</li>
				</ul>
			</div>
		]
	},

	"delegator_stake": {
		"en": [
			<div key="delegator_stake_en" className="space-y-2">
				<h4 className="text-lg font-medium">Delegators&apos; Stake</h4>
				<p>The total amount of ada that other users (delegators) have staked to this pool.</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>The more ada staked by delegators, the higher the pool’s likelihood of being selected to produce blocks and earning rewards.</li>
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
		],
		"de": [
			<div key="delegator_stake_jp" className="space-y-2">
				<h4 className="text-lg font-medium">Anteil des Delegierenden (Delegators&apos; Stake)</h4>
				<p>Die Gesamtmenge an ADA, die andere Delegierede an diesen Pool delegiert haben.</p>
				<ul className="list-disc pl-6 space-y-2">
					<li>Je mehr ADA von den Delegierenden eingesetzt werden, desto höher ist die Wahrscheinlichkeit, dass der Pool für
						die Validierung von Blöcken ausgewählt wird.</li>
					<li>Pools mit einem höheren delegierten Stake produzieren tendenziell mehr Blöcke und generieren mehr Rewards.
						Allerdings muss dies gegen die Gebühren abgewogen werden, die sie erheben.</li>
				</ul>
			</div>
		]
	},

	"total_pool_stake": {
		"en": [
			<div key="total_pool_stake_en" className="space-y-2">
				<h4 className="text-lg font-medium">Total Pool Stake</h4>
				<p>The combined amount of ada in the pool, including the operator&apos;s pledge and the delegators&apos; stake.
					This is the total ada that the pool uses to participate in block production and earn rewards.</p>
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
		],
		"de": [
			<div key="total_pool_stake_jp" className="space-y-2">
				<h4 className="text-lg font-medium">Gesamtsumme (Total Pool Stake)</h4>
				<p>Die Gesamtsumme an ADA, einschließlich des Eigenkapitals des Betreibers und der Anteile der Delegierenden,
					die dem Pool zugeschrieben sind, um an der Blockvalidierung teilzunehmen.</p>
				<p>Pools mit höherem Einsatz werden mehr Blöcke validieren und erwirtschaften somit höhere Erträge.
					Der Ertrag wird Anteilsmäßig zwischen dem Poolbetreiber und den Delegierenden aufgeteilt.</p>
			</div>
		]
	},

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
		],
		"de": [
			<div key="pool_fixed_costs_jp" className="space-y-2">
				<h4 className="text-lg font-medium">Fixe Gebühr (Pool Fixed Costs)</h4>
				<p>Eine Mindestgebühr, die der Stake-Pool-Betreiber in jeder Epoche von den Erträgen abzieht, um den Betrieb des Pools zu finanzieren.
					Diese Gebühr wird zuerst abgezogen, bevor die Erträge an die Delegierenden anteilsmäßig verteilt werden. Der Betreiber kann sie nutzen,
					um die Fixkosten für die Infrastruktur zu decken (z. B. Server, Netzwerke, Redundanzen ...).</p>
				<p>Falls der Pool während einer Epoche keine Blöcke validiert, werden auch keine Erträge erwitschaftet. In diesem Fall werden dem
					Poolbetreiber und den Delegierenden für diese Epoche keine Erträge gut geschrieben.</p>
			</div>
		]
	},

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
		],
		"de": [
			<div key="pool_variable_fee_jp" className="space-y-2">
				<h4 className="text-lg font-medium">Variable Gebühr (Pool Variable Fee)</h4>
				<p>Ein Prozentsatz der erwirtschafteten Erträge, den der Poolbetreiber einbehält.</p>
				<p>Delegierte erhalten den verbleibenden Ertrag nach Abzug der fixen- und variablen Gebühren.
					Der Wert wird als Prozentsatz multipliziert mit 100 angezeigt.</p>
			</div>
		]
	},


	"rho": {
		"en": [
			<div key="rho_en" className="space-y-2">
				<h4 className="text-lg font-medium">Rho</h4>
				<p>A % of the Reserve that goes towards paying Staking Reward in each epoch (e.g. 0.003 is 0.3%)</p>
			</div>
		],
		"jp": [
			<div key="rho_jp" className="space-y-2">
				<h4 className="text-lg font-medium">ρ（ロー）</h4>
				<p>各エポックでステーキング報酬の支払いに充てられるリザーブの割合（例: 0.003 は 0.3%）。</p>
			</div>
		],
		"de": [
			<div key="rho_jp" className="space-y-2">
				<h4 className="text-lg font-medium">ρ（ロー）</h4>
				<p>Ein Prozentsatz der Reserve, der in jeder Epoche zur Zahlung der Staking Erträge verwendet wird (z. B. 0,003 ist 0,3 %)</p>
			</div>
		]
	},

	"tau": {
		"en": [
			<div key="tau_en" className="space-y-2">
				<h4 className="text-lg font-medium">Tau</h4>
				<p>A of the % Reward that goes towards Treasury in each epoch (e.g. 20%)</p>
			</div>
		],
		"jp": [
			<div key="tau_jp" className="space-y-2">
				<h4 className="text-lg font-medium">Tau</h4>
				<p>各エポックでトレジャリーに割り当てられる報酬の割合（例: 20%）。</p>
			</div>
		],
		"de": [
			<div key="tau_jp" className="space-y-2">
				<h4 className="text-lg font-medium">Tau</h4>
				<p>Ein Prozentsatz der Ertäge die in jeder Epoche in die Reserve fließt (z. B. 20 %)</p>
			</div>
		]
	},

	"k": {
		"en": [
			<div key="k_en" className="space-y-2">
				<h4 className="text-lg font-medium">K</h4>
				<p>Optimal number of fully saturated pools (e.g. 500). This number determines the level of pool stake beyond
					which the staking reward starts to decrease. This limits how big a single pool can economically become.</p>
				<p>Given the relative ease with which it is to set-up new stake pools, this parameter rarely becomes a
					constraining factor</p>
			</div>
		],
		"jp": [
			<div key="k_jp" className="space-y-2">
				<h4 className="text-lg font-medium">K</h4>
				<p>
					完全に飽和したプールの最適な数（例: 500）。この数値は、ステーキング報酬が減少し始めるプールステークの上限を決定します。
					これにより、単一のプールが経済的にどれほど大きくなるかが制限されます。
				</p>
				<p>
					新しいステークプールを設定するのが比較的簡単なため、このパラメータが制約要因になることは稀です。
				</p>
			</div>
		],
		"de": [
			<div key="k_jp" className="space-y-2">
				<h4 className="text-lg font-medium">K</h4>
				<p>Die optimale Anzahl vollständig gesättigter Pools (z. B. 500). Diese Zahl bestimmt die Stake-Grenze, ab der die Erträge sinken.
					Dadurch wird begrenzt, wie groß ein einzelner Pool wirtschaftlich betrieben werden kann.</p>
				<p>Da es relativ einfach ist, neue Stake Pools einzurichten, spielt dieser Parameter keine Rolle als einschränkender Faktor.</p>
			</div>
		]
	},

	"a0": {
		"en": [
			<div key="a0_en" className="space-y-2">
				<h4 className="text-lg font-medium">a0</h4>
				<p>Determines how much the size of a stake pool&apos;s pledge influences the rewards distribution.
					It serves as an incentive mechanism to encourage stake pool operators to pledge more ada to their pools.</p>
			</div>
		],
		"jp": [
			<div key="a0_jp" className="space-y-2">
				<h4 className="text-lg font-medium">a0</h4>
				<p>
					ステークプールの誓約の大きさが報酬分配にどれほど影響するかを決定します。
					これは、ステークプール運営者が自分のプールにもっとADAを誓約するよう促すインセンティブ機構として機能します。
				</p>
			</div>
		],
		"de": [
			<div key="a0_jp" className="space-y-2">
				<h4 className="text-lg font-medium">a0</h4>
				<p>Bestimmt, wie stark das Eigenkapital eines Stake Pools die Belohnungsverteilung beeinflusst.
					Es dient als Anreizmechanismus, um Stake Pool Betreiber zu ermutigen, ein hohes EIgenkapital zu hinterlegen.</p>
			</div>
		]
	},

	"z0": {
		"en": [
			<div key="z0_en" className="space-y-2">
				<h4 className="text-lg font-medium">z0</h4>
				<p>This is a transformation of the a0 parameter for the rewards formula</p>
			</div>
		],
		"jp": [
			<div key="z0_jp" className="space-y-2">
				<h4 className="text-lg font-medium">z0</h4>
				<p>これは報酬計算式のためにa0パラメータを変換したものです。</p>
			</div>
		],
		"de": [
			<div key="z0_jp" className="space-y-2">
				<h4 className="text-lg font-medium">z0</h4>
				<p>Ist der Kehrwert von a0 in der Belohnungsformel.</p>
			</div>
		]
	},

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
		],
		"de": [
			<div key="days_in_epoch_de" className="space-y-2">
				<h4 className="text-lg font-medium">Anzahl der Tage einer Epoche</h4>
				<p>...</p>
			</div>
		]
	},

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
		],
		"de": [
			<div key="epochs_in_year_de" className="space-y-2">
				<h4 className="text-lg font-medium">Anzahl der Epochen pro Jahr</h4>
				<p>...</p>
			</div>
		]
	},

	"slots_in_epoch": {
		"en": [
			<div key="slots_in_epoch_en" className="space-y-2">
				<h4 className="text-lg font-medium">Slots in an Epoch</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="slots_in_epoch_jp" className="space-y-2">
				<h4 className="text-lg font-medium">エポック内のスロット数</h4>
				<p>...</p>
			</div>
		],
		"de": [
			<div key="slots_in_epoch_de" className="space-y-2">
				<h4 className="text-lg font-medium">Anzahl der Slots einer Epoche</h4>
				<p>...</p>
			</div>
		]
	},

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
		],
		"de": [
			<div key="chain_density_de" className="space-y-2">
				<h4 className="text-lg font-medium">Kettendichte (Chain Density)</h4>
				<p>...</p>
			</div>
		]
	},

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
		],
		"de": [
			<div key="blocks_in_epoch_de" className="space-y-2">
				<h4 className="text-lg font-medium">Anzahl der Blöcke pro Epoche</h4>
				<p>...</p>
			</div>
		]
	},

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
		],
		"de": [
			<div key="max_ada_supply_de" className="space-y-2">
				<h4 className="text-lg font-medium">Maximale, verfügbarer ADA</h4>
				<p>...</p>
			</div>
		]
	},

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
		],
		"de": [
			<div key="current_ada_supply_de" className="space-y-2">
				<h4 className="text-lg font-medium">Aktuell, verfügbare ADA</h4>
				<p>...</p>
			</div>
		]
	},

	"reserve_ada": {
		"en": [
			<div key="reserve_ada_en" className="space-y-2">
				<h4 className="text-lg font-medium">Reserve Ada</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="reserve_ada_jp" className="space-y-2">
				<h4 className="text-lg font-medium">リザーブADA (Reserve ADA)</h4>
				<p>...</p>
			</div>
		],
		"de": [
			<div key="reserve_ada_de" className="space-y-2">
				<h4 className="text-lg font-medium">In Reserve befindliche ADA</h4>
				<p>...</p>
			</div>
		]
	},

	"total_staked_ada": {
		"en": [
			<div key="total_staked_ada_en" className="space-y-2">
				<h4 className="text-lg font-medium">Total Staked Ada</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="total_staked_ada_jp" className="space-y-2">
				<h4 className="text-lg font-medium">総ステークADA (Total Staked ADA)</h4>
				<p>...</p>
			</div>
		],
		"de": [
			<div key="total_staked_ada_de" className="space-y-2">
				<h4 className="text-lg font-medium">Gesamt delegierte ADA (Total Staked ADA)</h4>
				<p>...</p>
			</div>
		]
	},

	"fees_in_epoch": {
		"en": [
			<div key="fees_in_epoch_en" className="space-y-2">
				<h4 className="text-lg font-medium">Ada Fees in an Epoch</h4>
				<p>...</p>
			</div>
		],
		"jp": [
			<div key="fees_in_epoch_jp" className="space-y-2">
				<h4 className="text-lg font-medium">エポック内のADA手数料 (ADA Fees in an Epoch)</h4>
				<p>...</p>
			</div>
		],
		"de": [
			<div key="fees_in_epoch_de" className="space-y-2">
				<h4 className="text-lg font-medium">ADA Gebühren pro Epoche</h4>
				<p>...</p>
			</div>
		]
	},

	"distribution_from_reserve": {
		"en": [
			<div key="distribution_from_reserve_en" className="space-y-2">
				<h4 className="text-lg font-medium">Ada Distributed from Reserve</h4>
				<p>A portion (rho) is distributed from Cardano Reserve to pay for Staking Rewards each Epoch. This number will reduce gradually over time
					as the amount in the Reserve gets depleted. To maintain the same level of staking rewards the rewards from Fees will need to rise.</p>
				<p>Change the Rho parameter to see how this affects the total reward to delegators</p>
			</div>
		],
		"jp": [
			<div key="distribution_from_reserve_jp" className="space-y-2">
				<h4 className="text-lg font-medium">リザーブから分配されるADA (ADA Distributed from Reserve)</h4>
				<p>
					各エポックごとにCardanoリザーブから一定割合（rho）がステーキング報酬の支払いに充てられます。
					リザーブの残高が減少するにつれ、この割合も徐々に減少します。
					ステーキング報酬を維持するためには、手数料からの報酬を増やす必要があります。
				</p>
				<p>
					Rhoパラメータを変更して、これが委任者への総報酬にどのように影響するかを確認してください。
				</p>
			</div>
		],
		"de": [
			<div key="distribution_from_reserve_de" className="space-y-2">
				<h4 className="text-lg font-medium">ADA aus der Reserve</h4>
				<p>In jeder Epoche wird ein fester Prozentsatz (rho) der Cardano Reserve für die Zahlung von Erträgen ausgeschüttet.
					Dieser Prozentsatz verringert sich schrittweise, mit der Abnahme des Reserveguthabens.
					Um das das Niveau der Staking Erträge zu halten, müssen die Transaktionsgebühren im Gegenzug steigen.</p>
				<p>Ändere den Rho-Parameter, um zu sehen, wie sich dies auf die Gesamtbelohnung der Delegierenden auswirkt.</p>
			</div>
		]
	},

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
		],
		"de": [
			<div key="gross_rewards_de" className="space-y-2">
				<h4 className="text-lg font-medium">Bruttoertrag</h4>
				<p>...</p>
			</div>
		]
	},

	"distribution_to_treasury": {
		"en": [
			<div key="distribution_to_treasury_en" className="space-y-2">
				<h4 className="text-lg font-medium">Distribution to Treasury</h4>
				<p>....</p>
			</div>
		],
		"jp": [
			<div key="distribution_to_treasury_jp" className="space-y-2">
				<h4 className="text-lg font-medium">トレジャリーへの分配 (Distribution to Treasury)</h4>
				<p>....</p>
			</div>
		],
		"de": [
			<div key="distribution_to_treasury_de" className="space-y-2">
				<h4 className="text-lg font-medium">Reserve Zuteilung (Distribution to Treasury)</h4>
				<p>....</p>
			</div>
		]
	},

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
		],
		"de": [
			<div key="net_rewards_to_pools_de" className="space-y-2">
				<h4 className="text-lg font-medium">Nettoertrag</h4>
				<p>...</p>
			</div>
		]
	},

	"staking_reward_per_year_ada": {
		"en": [
			<div key="staking_reward_per_year_ada_en" className="space-y-2">
				<h4 className="text-lg font-medium">Staking Reward per Year Ada</h4>
				<p>Expected reward in ada per year for the amount staked.</p>
				<p>Number in grey shows the result from the previous simulation, for comparability between simulations with different parameters</p>
			</div>
		],
		"jp": [
			<div key="staking_reward_per_year_ada_jp" className="space-y-2">
				<h4 className="text-lg font-medium">年間ステーキング報酬 ADA (Staking Reward per Year ADA)</h4>
				<p>ステークされた量に対する年間予想報酬（ADA）。</p>
				<p>灰色の数字は、異なるパラメータでのシミュレーション間で比較できるように、前回のシミュレーション結果を示しています。</p>
			</div>
		],
		"de": [
			<div key="staking_reward_per_year_ada_de" className="space-y-2">
				<h4 className="text-lg font-medium">Staking Ertrag pro Jahr in ADA</h4>
				<p>Erwarteter Ertrag in ADA pro Jahr für den eingesetzten Betrag.</p>
				<p>Zur Vergleichbarkeit zwischen den Simulationen, zeigt die graue Zahl das Ergebnis der vorherigen Simulation an.</p>
			</div>
		]
	},

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
				<h4 className="text-lg font-medium">年間のステーキング報酬 (Annualized Staking Reward)</h4>
				<p>ステークされた量に対する年間予想報酬（%で表示）。</p>
				<p>灰色の数字は、異なるパラメータでのシミュレーション間で比較できるように、前回のシミュレーション結果を示しています。</p>
			</div>
		],
		"de": [
			<div key="staking_reward_annualized_perc_de" className="space-y-2">
				<h4 className="text-lg font-medium">Jährlicher Staking Ertrag</h4>
				<p>Erwartete Belohnung in % pro Jahr für den eingesetzten Betrag.</p>
				<p>Zur Vergleichbarkeit zwischen den Simulationen, zeigt die graue Zahl das Ergebnis der vorherigen Simulation an.</p>
			</div>
		]
	},

}

/**
 * These are the info boxes placed next to the large sections of the calculator
 * - Amount of ada to sake (section 1)
 * - Stake Pools (section 2)
 * - Stake Pool Parameters (section 3)
 * - Blockchain Parameters (section 4)
 */

export const infoSections = {

	"info_section_1": {
		"en": [
			<div key="info_section_1_en" className="space-y-2">
				<h4 className="text-md font-medium">Info</h4>
				<p>This calculator is based on a <a href="https://en.wikipedia.org/wiki/Monte_Carlo_method">Monte Carlo simulation</a> and live data from the Cardano mainnet.</p>
				<p>You can delegate your ada to a staking pool and receive automatic and regular rewards. </p>
				<p>Enter any ada value for which you want to calculate and simulate the yield.</p>
				<p>The gray number shows the result of your previous simulation so you can compare different parameter values.</p>
				<p>Learn more about <a href="https://cardano.org/stake-pool-delegation/" target="_blank">Proof of Stake delegations of your ada</a>,
					how to <a href="https://cardano.org/stake-pool-operation" target="_blank">operate a staking pool </a>,
					and a good read about the <a href="https://cexplorer.io/article/cardano-s-liquid-staking-from-a-security-perspective" target="_blank">slashing free, liquid staking</a> capabilities offered to all ada holders.
				</p>
			</div>
		],
		"jp": [
			<div key="info_section_1_jp" className="space-y-2">
				<h4 className="text-md font-medium">情報 (じょうほう, jōhō)</h4>
				<p>この計算機は、<a href="https://en.wikipedia.org/wiki/Monte_Carlo_method">モンテカルロシミュレーション</a>とCardanoメインネットのライブデータに基づいています。</p>
				<p>ADAをステーキングプールに委任することで、自動的かつ定期的に報酬を受け取ることができます。</p>
				<p>任意のADA値を入力し、利回りを計算・シミュレーションしてください。</p>
				<p>灰色の数値は前回のシミュレーション結果を示しており、異なるパラメーター値を比較できるようになっています。</p>
				<p>詳しく知る:
					ADAの<a href="https://cardano.org/stake-pool-delegation/" target="_blank">プルーフ・オブ・ステーク（PoS）委任</a>について
					<a href="https://cardano.org/stake-pool-operation" target="_blank">ステーキングプールの運用方法</a>
					すべてのADA保有者に提供される、<a href="https://cexplorer.io/article/cardano-s-liquid-staking-from-a-security-perspective" target="_blank">スラッシングなしのリキッドステーキング</a>に関する解説
				</p>
			</div>
		],
		"de": [
			<div key="info_section_1_de" className="space-y-2">
				<h4 className="text-md font-medium">Information</h4>
				<p>Dieser Rechner basiert auf einer <a href="https://en.wikipedia.org/wiki/Monte_Carlo_method" target="_blank">Monte Carlo Simulation</a> in Verbindung mit Echtzeitdaten des Cardano Mainnet Netzwerkes.</p>
				<p>Du kannst dein ADA an einen Staking-Pool delegieren und erhältst automatische und regelmäßige Belohnungen.</p>
				<p>Gib einen beliebigen ADA-Betrag ein, für den du die Rendite berechnen und simulieren möchtest.</p>
				<p>Zur Vergleichbarkeit zwischen den Simulationen, zeigt die graue Zahl das Ergebnis der vorherigen Simulation an.</p>
				<p>Weiterführende Informationen zu <a href="https://cardano.org/stake-pool-delegation/" target="_blank">Proof of Stake (PoS)</a>, wie man
					einen <a href="https://cardano.org/stake-pool-operation" target="_blank">Stake Pool</a>  betreibt und was es bedeutet, dass die delegierten ADA frei verfügbar und jederzeit liquide sind, dass
					sogenannte <a href="https://cexplorer.io/article/cardano-s-liquid-staking-from-a-security-perspective" target="_blank">liquid staking</a>, findest du unter den angegebenen Links.
				</p>
			</div>
		]
	},

	"info_section_2": {
		"en": [
			<div key="info_section_2_en" className="space-y-2">
				<h4 className="text-md font-medium">Staking Pools Info</h4>
				<p>You can actively participate with your ada tokens in the liquid staking mechanism and thus the <a href="https://eprint.iacr.org/2016/889.pdf" target="_blank">provable security of Cardano</a>.</p>
				<p>The <a href="https://cardano.org/ouroboros/" target="_blank">Ouroboros protocol</a> provides rules that rely on the rational behavior of ada holders delegating to stake pools that yield the <a href="https://github.com/cardano-foundation/cardano-economic-parameter-insights/blob/main/whitepaper.md#pool-incentives-for-stake-and-pledge" target="_blank">maximum staking reward</a>.</p>
				<p>Select up to 3 different real pools to compare the differences for the stake amount you initially set.</p>
				<p>You will see that the pools have different characteristics and qualities that can make a significant difference to you.</p>
			</div>
		],
		"jp": [
			<div key="info_section_2_jp" className="space-y-2">
				<h4 className="text-md font-medium">ステーキングプール情報</h4>
				<p>あなたのADAトークンを使用してリキッドステーキングメカニズムに積極的に参加し、<a href="https://eprint.iacr.org/2016/889.pdf" target="_blank">Cardanoの証明可能なセキュリティ</a>を支えることができます。</p>
				<p><a href="https://cardano.org/ouroboros/" target="_blank">Ouroborosプロトコル</a>は、ADA保有者が合理的に行動し、<a href="https://github.com/cardano-foundation/cardano-economic-parameter-insights/blob/main/whitepaper.md#pool-incentives-for-stake-and-pledge" target="_blank">最大のステーキング報酬</a>を得られるステークプールに委任することを前提としたルールを提供します。</p>
				<p>最大3つの異なる実際のステークプールを選択し、最初に設定したステーキング額に対する違いを比較できます。</p>
				<p>プールごとに異なる特徴や品質があり、それがあなたにとって大きな違いを生むことがわかるでしょう。</p>
			</div>
		],
		"de": [
			<div key="info_section_2_de" className="space-y-2">
				<h4 className="text-md font-medium">Informationen zu den Staking Pools</h4>
				<p>Partizipiere mit deine ADA Token durch den Liquid-Staking-Mechanismus auf dem nachweislich <a href="https://eprint.iacr.org/2016/889.pdf" target="_blank">sicheren Cardano Netzwerk</a>.</p>
				<p>Das <a href="https://cardano.org/ouroboros/" target="_blank">Ouroboros-Protokoll</a> legt Regeln fest, die auf dem rationalen Verhalten der ADA-Inhaber basieren, die ihre Coins an Stake-Pools delegieren, die die <a href="https://github.com/cardano-foundation/cardano-economic-parameter-insights/blob/main/whitepaper.md#pool-incentives-for-stake-and-pledge" target="_blank">maximalen Erträge</a> erzielen.</p>
				<p>Wähle bis zu 3 Pools aus, um diese miteinander zu vergleichen.</p>
				<p>Du wirst feststellen, dass die Pools unterschiedliche Merkmale aufweisen, die einen erheblichen Unterschied ausmachen können.</p>
			</div>
		]
	},

	"info_section_3": {
		"en": [
			<div key="info_section_3_en" className="space-y-2">
				<h4 className="text-md font-medium">Staking Pool Parameters Info</h4>
				<p>This section is pre-filled with the values of the pool you last selected above. Here you can virtually change its main values and thus simulate the effects on the rewards displayed above.</p>
				<p>Depending on the size of the pool and the proportion of the pledge, there will be differences in returns, which are also explained in detail in this <a href="https://github.com/cardano-foundation/cardano-economic-parameter-insights/blob/main/whitepaper.md#pool-incentives-for-stake-and-pledge" target="_blank">Parameter Modeling whitepaper</a>.</p>
				<p>To enable simulations that explore new limits, this simulator also allows you to set values that are not currently possible according to the valid global blockchain parameters and the <a href="https://ucarecdn.com/621764d9-92a1-4849-baab-8b87089dd600/" target="_blank">Guardrails</a> document, e.g. minimum fixed fees below 170 ada.</p>
			</div>
		],
		"jp": [
			<div key="info_section_3_jp" className="space-y-2">
				<h4 className="text-md font-medium">ステーキングプールパラメーター情報</h4>
				<p>このセクションは、直前に選択したプールの値で自動入力されています。  ここでは、その基本的な値を仮想的に変更し、上部に表示される報酬への影響をシミュレーションすることができます。</p>
				<p>プールの規模やプレッジの割合に応じて利回りに差が生じます。  この詳細については、<a href="https://github.com/cardano-foundation/cardano-economic-parameter-insights/blob/main/whitepaper.md#pool-incentives-for-stake-and-pledge" target="_blank">パラメーターモデリングのホワイトペーパー</a>で詳しく説明されています。</p>
				<p>新しい制限値を検討するシミュレーションを可能にするために、このシミュレーターでは、現在の有効なグローバルブロックチェーンパラメーターおよび<a href="https://ucarecdn.com/621764d9-92a1-4849-baab-8b87089dd600/" target="_blank">ガードレール</a>文書に基づく制約を超えた値も設定できます。  例えば、最小固定手数料を170 ADA未満に設定することも可能です。</p>
			</div>
		],
		"de": [
			<div key="info_section_3_de" className="space-y-2">
				<h4 className="text-md font-medium">Informationen zu den Staking Pool Parametern</h4>
				<p>Dieser Bereich ist bereits mit den Werten des Pools gefüllt, den du oben zuletzt ausgewählt hast. Hier kannst du mit den Werte spielen und so die Auswirkungen auf die oben angezeigten Erträge simulieren.</p>
				<p>Abhängig von der Poolgröße und dem Anteil des Eigenkapitals, ergeben sich Unterschiede bei den Renditen, die auch in diesem <a href="https://github.com/cardano-foundation/cardano-economic-parameter-insights/blob/main/whitepaper.md#pool-incentives-for-stake-and-pledge" target="_blank">Whitepaper zur Parametermodellierung</a> ausführlich erläutert werden.</p>
				<p>Mit dem Simulator können auch Werte festgelegt werden, die derzeit gemäß den gültigen globalen Blockchain-Parametern und dem <a href="https://ucarecdn.com/621764d9-92a1-4849-baab-8b87089dd600/" target="_blank">Guardrails Dokument</a> nicht möglich sind. Das sind z. B. Mindestfixgebühren unter 170 ADA.</p>
			</div>
		]
	},

	"info_section_4": {
		"en": [
			<div key="info_section_4_en" className="space-y-2">
				<h4 className="text-md font-medium">Info Blockchain Parameters</h4>
				<p>In the currently deepest part of this reward calculator, you can get an impression of the parameters that have become part of <a href="https://developers.cardano.org/docs/governance/cardano-governance/governance-model/" target="_blank">governance on the Cardano PoS blockchain</a> with the Chang and Plomin hard fork in early 2025.  </p>
				<p>The first part deals with the <span className="text-md font-medium">dynamic parameters</span> that can be changed
					with <a href="https://developers.cardano.org/docs/governance/cardano-governance/governance-actions/" target="_blank">governance actions </a>
					as defined in <a href="https://github.com/cardano-foundation/CIPs/tree/master/CIP-1694" target="_blank">CIP-1694</a>.
				</p>
				<p>These values can be changed by a majority vote of the stake pool operators and/or DReps, and then apply to the entire blockchain, all stake pools and ada holders.
					A change can significantly influence the <a href="https://www.cardanofoundation.org/blog/releasing-an-open-source-rewards-calculation" target="_blank">reward calculation</a>, the game theory,
					the <a href="https://github.com/cardano-foundation/cardano-economic-parameter-insights/blob/main/whitepaper.md#actual-reserves-and-treasury-distribution" target="_blank">consumption of reserves</a>,
					the filling of the treasury pot and also the individual ada holder&apos;s staking rewards.
				</p>
				<p>In the <span className="text-md font-medium">Fees & Remaining Reserves</span> section, the simulator also allows you to simulate a theoretical value of the transaction fees collected per epoch. The effective returns cannot be changed by governance actions, but depend largely on the adoption and integration of the blockchain in use cases. </p>
			</div>
		],
		"jp": [
			<div key="info_section_4_jp" className="space-y-2">
				<h4 className="text-md font-medium">ブロックチェーンパラメーター情報</h4>
				<p>この報酬計算ツールの最も詳細な部分では、2025年初頭のChangおよびPlominハードフォークにより、<a href="https://developers.cardano.org/docs/governance/cardano-governance/governance-model/" target="_blank">Cardano PoSブロックチェーンのガバナンス</a>に組み込まれたパラメーターについての理解を深めることができます。</p>
				<p>最初の部分では、<a href="https://github.com/cardano-foundation/CIPs/tree/master/CIP-1694" target="_blank">CIP-1694</a>で定義されている
					<a href="https://developers.cardano.org/docs/governance/cardano-governance/governance-actions/" target="_blank">ガバナンスアクション</a>を通じて変更可能な
					<span className="text-md font-medium">動的パラメーター</span>について扱います。
				</p>
				<p>これらの値は、ステークプールオペレーターおよび/またはDRepの過半数の投票によって変更でき、その後、ブロックチェーン全体、すべてのステークプール、およびADA保有者に適用されます。
					変更は、<a href="https://www.cardanofoundation.org/blog/releasing-an-open-source-rewards-calculation" target="_blank">報酬計算</a>、ゲーム理論、
					<a href="https://github.com/cardano-foundation/cardano-economic-parameter-insights/blob/main/whitepaper.md#actual-reserves-and-treasury-distribution" target="_blank">準備金の消費</a>、
					トレジャリーの蓄積、さらには個々のADA保有者のステーキング報酬にも大きな影響を与える可能性があります。
				</p>
				<p><span className="text-md font-medium">手数料 & 残りの準備金</span> セクションでは、シミュレーターを使用して、エポックごとに回収される取引手数料の理論値をシミュレーションすることができます。
					実際のリターンはガバナンスアクションによって変更することはできませんが、主にブロックチェーンの採用とユースケースへの統合に依存します。</p>
			</div>
		],
		"de": [
			<div key="info_section_4_de" className="space-y-2">
				<h4 className="text-md font-medium">Informatioenen zu den Blockchain Parametern</h4>
				<p>Mit dem Rechner kannst du dir einen Überblick von den Parametern verschaffen, die mit dem Chang- und Plomin-Hardfork Anfang 2025 Teil des <a href="https://developers.cardano.org/docs/governance/cardano-governance/governance-model/" target="_blank">Abstimmungsrechts auf der Cardano Blockchain</a> geworden sind.</p>
				<p>Der erste Teil beschäftigt sich mit den <span className="text-md font-medium">dynamischen Parametern</span>, die per <a href="https://developers.cardano.org/docs/governance/cardano-governance/governance-actions/" target="_blank">Akklamation</a> unter Berücksichtigung von <a href="https://github.com/cardano-foundation/CIPs/tree/master/CIP-1694" target="_blank">CIP-1694</a> geändert werden können.</p>
				<p>Diese Werte können durch eine Mehrheitsentscheidung der Stake Pool Betreiber und/oder DReps geändert werden und gelten dann fortan für die gesamte Cardano Blockchain und ihrer Teilnehmer (Stake Pools und ADA Inhaber).
					Eine Änderung kann die <a href="https://www.cardanofoundation.org/blog/releasing-an-open-source-rewards-calculation" target="_blank">Ertragsberechnung</a>, die Spieltheorie,
					den Verbrauch von <a href="https://github.com/cardano-foundation/cardano-economic-parameter-insights/blob/main/whitepaper.md#actual-reserves-and-treasury-distribution" target="_blank">Rücklagen und Reserven</a> und dem Zweck der Reserve sowie die Ertragsberechnung der einzelnen ADA Inhaber erheblich beeinflussen.</p>
				<p>Im Abschnitt <span className="text-md font-medium">Gebühren und verbleibende Reserven</span> ermöglicht der Simulator außerdem die Simulation eines theoretischen Werts der pro Epoche erhobenen Transaktionsgebühren. Die effektiven Renditen können nicht durch Abstimmungen geändert werden, sondern hängen weitgehend von der Einführung und Integration der Blockchain in Anwendungsfällen ab.</p>
			</div>
		]
	},

}
