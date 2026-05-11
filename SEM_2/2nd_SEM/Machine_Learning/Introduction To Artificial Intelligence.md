The Topics that have been done right now.
- Transforming the raw data into the intelligence
	- Data-> Information -> Knowledge -> Understanding ->Intelligence
- Definition of AI
	- The science of engineering of making the intelligent machines
- Evolution-Era of AI
- Need For studying artificial Intelligence
- AI as a Foundational Technology
- Applications of AI

- The Types/Classifications of Artificial Intelliegence
	- Artificial Narrow Intelligence , Artificial Generic Intelligence, Artificial Super Intelligence 

- The classifications based on Functionalities(How do they interact with the Environments)
	- Reactive Machines:- 
		- Do not store past experiences
		- They do not learn from history
		- Operates Based on (**if condition -> Then Action**)
	- Limited Memory AI
		- Use past data for short period to make decisions
		- ex:- A self driving Car Observes over last few seconds to decide weather to break or not
		- Store Temporary Info's. 
		- They Do no possess long term independent reasoning beyond their Trained data.
	- Theory of Mind AI
		- Would understand human emotions beliefs intentions and psychological stages.
		- This is still in research stages and not in fully developed
	 - Self-Aware AI
		 - Possess Consciousness and awareness of their own existence 
		 - Remains entirely Theoretical 

NOTE:- **The majority of AI systems are today are either reactive machines or limited memory systems under the broader category**

# AGENTS
- Described and analyzed using the concept of an agent.
- Definition:- Defined as an entity that perceives its environment through sensors and acts upon environment using actuators.
- Agent Sequence :- Percept Sequence -> Action

## **Intelligent Agents**
- Evaluate their Environment and make context aware decisions
- Possess Following Characteristics
	- Autonomy
	- Perception
	- Action 
	- Goal Oriented Behavior
	- Adaptability
## **Agent Architecture**
- Contains Two major Components
- **Agent_Program**:- The Computational Logic or Algorithm.
- **Architecture**:- The hardware or platform on which the program runs.
- **Architecture includes**:- Sensors, Preprocessing Modules, Decision Making System, ActArchitecture includesMuuators.
## **Rational Agents**
- Selects action that maximize the Performance Measure based on available percepts and knowledge
- Does not know the future outcomes
- Makes decisions based on available info's
- chooses action expected to yield best
## **Performance Measure**
- Defines how success is evaluated for an agent.
- Must Clearly Been defined Before defining the agent

## **Importance Of Agent Model**
- Provides the unified way to study the AI Systems

## **Environment Types and the PEAS MODEL**
- Effective agent requires the Clear Understanding of the environment in which it operates.
- **Environment**:-Environment is the external world in which an agent operates.
	- Provides input through sensors and is affected by agents actions through actuators.

- **Environment_Types**:-Fully Observable VS Partially Observable , Deterministic vs Stochastic, Episodic Vs Sequential, Static Vs Sequential, Static Vs Dynamic, Discrete Vs Continuous, Single Vs Multi_Agent  

	- **Fully Observable vs Partially Observable**:-Fully_Observable is __ If the agent has the complete access to all relevant info about the environment at every moment. Example Chess Board.
	- Partially_Available__ if agent has incomplete information. Example Diving in fog.

	- **Deterministic Vs Stochastic**:- Deterministic __ Next state is completely determined by the current state and agents action.Example :- Solving a crossword Puzzle.
	- Stochastic__ Includes randomness and uncertainty Example:- Stock Market

	- **Episodic Vs Sequential**:- Episodic __ Each action is independent of the previous action. Example:- Image classification.
	- Sequential__ Current decisions affect future states. Example:- Chess, Driving.

	- **Static Vs Dynamic**:- Static Environment __ does not change while agent is making decisions. Example:- Crossword Puzzle
	- Dynamic __ changes over time even if the agent is not acting. Example:- Traffic Systems.

	- **Discrete Vs Continuous**:- Discrete Env __ has finite number of states and actions.Example:- Chess(finite Board Positions)
	- Continuous Env __ involves infinite number of possible states and action. Example:- Steering wheel of Self Driving Car.

	- **Single Vs Multi-agent**:-Single __ Only one agent operates. Example:- Sudoku Solver
	- Multi __ multiple agents interact either competitively or cooperatively. Example:- Soccer_Match

- **Conceptual Diagram_ Agent-Environment Interaction**
	Interaction can be described as the following:-
	- Environment -> Sensors -> Agent -> Actuators -> Environment.
	- Environment provides the percept(software data) -> Agent Process the Percept -> Agent Selects the action ->Action Modifies the Environment -> New Percept is Generated.

-  **PEAS MODEL**
	- To systematically Design Rational Agents the PEAS Framework is used
	- p -> Performance Measure(How success is evaluated)
	- E -> Environment(Specifies where the agent operates)
	- A -> Actuators(Through which the agent acts)
	- S -> Sensors(Mechanism used to perceive the environment)
- IMPORTANCE OF Environment Analysis
	- Type of Environment determines
	- Complexity,Probabilistic Reasoning, Learning_algorithm, level_of_autonomy_required.

# Types Of Agents
- **Simple reflexive** agents:-  (Selects action based solely on the current percepts  ignoring the history of the past percepts) rule is in form IF Condition ->Then Action
	- Formally the action depends only on the current percept.
	- Action=f(current_percept).
	
- Model Based Reflex agents (It will improve upon the simple reflexive agents by maintaining an internal state that represents aspects of the environment not directly observable)
	- Action=f(internal State)
	- Example:- Robotic Vaccum Remembers which area or the floor that have been cleaned so far. (Minimal Internal State).
	
- Goal Based Agents(Instead of directly redirecting to the states these agents do consider the future consequences of actions).
	- They use the current state, Goal Information.
	- Example:- A chess Programs aims to achieve the check mate
	- They are more flexible
	- Action=f(current State, Goal, Model).
	
- Utility Based Agents:- (Goal Based agents usually define whats the goal is but utility agents quantify how desirable a particular state is).
	- The agent selects the action that maximises the expected utility.
	- Useful when multiple goals exists, Trade-offs are required, Uncertainity is Present
	- Example:- Self driving car balances, safety speed and fuel efficiency.
	- Expected utility=∑ P(outcome)* Utility(outcome).
	
- Learning Agents:- (most advanced type of agents) 
	- They improve performance over time by learning from experience.
	- Has four components :- (Performance Element, Learning Element , Critic , Problem Generator)
	- SOO:- Experience -> Learning -> Improved Policy -> Better Performance.
	- Example:- Chess AI Improves after analyzing the previous games.

- Connection with environment types 
	- **FO + Det → SR** (Fully Observable + Deterministic → Simple Reflex)
	- **PO → MB** (Partially Observable → Model-Based)
	- **Seq + Goal → GB** (Sequential + Goal-driven → Goal-Based)
	- **Stoch + Trade-offs → UB** (Stochastic + Trade-offs → Utility-Based)
	- **Dyn + Evol → LA** (Dynamic + Evolving → Learning Agent

# ARTIFICIAL INTELLIGENCE VS ML VS DEEP LEARNING VS DATA SCIENCE
- # **AI**
- Artificial Intelligence a broad cast field among the four 
- Refers the development of the system capable of performing the tasks that typically require the human intelligence.
- Not all AI systems Learn from the data 

- # ML
- Subset of AI.
- Focuses on algorithm that allow the systems to learn from data and improve performance without being explicitly programmed for every scenario.
- HERE the ML System improves its performance on a task T with Experience E Measured by performance P
- Performance(T,E) Grows high as E increases
- We allow algorithms to learn the patterns.
- ML Involves:- 
	- Supervised_Learning
	- Unsupervised_Learning
	- Reinforcement Learning

- # DL
- Subset of ML
- Uses Neural Networks with multiple hidden Layers
- Name deep here refers to the number of neural Networks 
- w => Weights; x=> Inputs; b=> Bias; f => activation function.
- mathematically Neural_Network Computes=> y=f(Wx+b)
- stacks like ==y = fₙ(Wₙ fₙ₋₁(...f₁(W₁x + b₁)...))== 
- powerful in Image Recognition, Speech Recognition, Natural Language Processing, Generative AI

- # DS
- Its an InterDisciplinary Field
- Focused on extracting the meaningful Insight from structured or unstructured data.
- Combines :- Statistics, Probability theory, Data visualization, Machine Learning, Domain Knowledge
- May or may not involve AI

HENCE Data Science is the broader scope that may or may not involve the AI.

|             AI              |             ML             |                  DL                   |                  DS                  |
| :-------------------------: | :------------------------: | :-----------------------------------: | :----------------------------------: |
|     Route optimization      |     Demand prediction      | Fraud detection using neural networks |     Identifying peak usage times     |
| Intelligent dispatch system | Dynamic pricing adjustment |    Image-based driver verification    |  Analyzing city-wise trip patterns   |
|                             |                            |                                       | Visualizing customer behavior trends |
## Types Of Ml
- Classified into the 3 major categories
- Supervised, Unsupervised, Reinforcement
- 