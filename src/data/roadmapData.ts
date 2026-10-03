import { YearPlan, CapstoneProject, PlacementPartner, InterviewQuestion, ResourceItem } from '../types/roadmap';

export const DIRECTOR_PROFILE = {
  name: "Dr. Raymond Vance, Ph.D.",
  role: "Head of Institute & Dean of AI Academic Affairs",
  institution: "AlgoGenius Institute of Artificial Intelligence & Data Science",
  credentials: "Former Senior Research Scientist at DeepMind, Ph.D. in Computational Intelligence from MIT",
  quote: "Welcome to AlgoGenius. Artificial Intelligence is not merely a set of frameworks or prompt wrappers—it is the fusion of rigorous mathematics, algorithmic elegance, systems engineering, and clear human communication. Over the next four years, you will transform from an eager beginner into a world-class AI architect capable of driving the next wave of technological breakthrough.",
  pillars: [
    { title: "Mathematical Rigor", desc: "No black boxes. Understand every gradient, singular value, and loss surface from first principles." },
    { title: "Algorithmic Precision", desc: "Clean Python and high-performance algorithms that scale from single chips to distributed clusters." },
    { title: "Tangible Engineering", desc: "Exhibition-grade working artifacts, open-source repositories, and peer-reviewed capstone contributions." },
    { title: "Strategic Career Readiness", desc: "Unflinching mastery of algorithmic coding, system design, and communication for top tech firms." }
  ]
};

export const FOUR_YEAR_ROADMAP: YearPlan[] = [
  {
    yearNumber: 1,
    title: "Year 1: Foundations & Communication",
    subtitle: "Mathematical Bedrocks, Discrete Logic & Professional Scientific Expression",
    focusArea: "Fundamentals lines / communication",
    heroImage: "/src/assets/images/year1_fundamentals_study_1791017073696.jpg",
    executiveSummary: "Your freshman year establishes the indelible mathematical foundation and professional communication habits that dictate your ceiling as an AI engineer. You will deconstruct linear vector spaces, multivariable optimization, discrete proofs, and computer systems while refining the ability to articulate complex technical ideas clearly in research writing and oral debate.",
    milestoneTitle: "The First-Year Foundations Portfolio & Tech Colloquium",
    milestoneDescription: "Every freshman completes a dual milestone: A verified computational linear algebra library built from scratch in C/Python, accompanied by a formal technical paper presented at the AlgoGenius Freshman Colloquium.",
    milestoneDeliverable: "Self-authored Linear Algebra Engine + 10-page Technical Literature Synthesis + Git Commits Portfolio",
    directorAdvice: "Do not rush into PyTorch or TensorFlow yet. The greatest AI practitioners are mathematicians who know how to code and communicate. Master the eigenvalues, the chain rule in multiple dimensions, and the ability to explain complex proofs on a whiteboard. Write every single week.",
    semesters: [
      {
        semesterNumber: 1,
        termTitle: "Semester 1: Mathematical Foundations & Computational Logic",
        theme: "Vector Spaces, Discrete Reasoning & Terminal Fluency",
        description: "Deconstruct the mathematical language of neural representations while developing Unix/Linux command-line supremacy and collaborative Git workflows.",
        totalCredits: 20,
        courses: [
          {
            id: "mth101",
            code: "MTH-101",
            title: "Linear Algebra & High-Dimensional Vector Spaces",
            credits: 5,
            category: "mathematics",
            weeklyHours: 6,
            overview: "Rigorous exploration of vector spaces, matrix factorizations (LU, QR, Cholesky), linear transformations, eigenvalues/eigenvectors, and Singular Value Decomposition (SVD)—the bedrock of dimensionality reduction and embeddings.",
            keyOutcomes: [
              "Compute and geometrically interpret eigenvalues, eigenvectors, and singular values",
              "Implement matrix transformations and projection matrices for high-dimensional data",
              "Understand orthonormal bases, Gram-Schmidt orthogonalization, and spectral theorem"
            ],
            modules: [
              { title: "Vector Spaces & Subspaces", description: "Null spaces, row/column spaces, rank-nullity theorem, basis and dimension", topics: ["Vector Operations", "Basis", "Dimension", "Subspace Projections"] },
              { title: "Linear Transformations & Factorization", description: "Matrix representations, Gaussian elimination, LU and QR factorizations", topics: ["Matrix Norms", "Condition Numbers", "QR Algorithm"] },
              { title: "Eigen-Decomposition & SVD", description: "Spectral theorem, positive definite matrices, principal axis theorem, SVD decomposition", topics: ["SVD Geometry", "Low-Rank Approximations", "Pseudoinverse"] }
            ],
            labProject: "Build an end-to-end SVD-based Image Compressor and Dimensionality Reducer in pure Python without external linear algebra libraries.",
            textbooks: [
              { title: "Linear Algebra and Its Applications", author: "Gilbert Strang", type: "book" },
              { title: "Mathematics for Machine Learning", author: "Marc Peter Deisenroth et al.", type: "book" }
            ]
          },
          {
            id: "cs101",
            code: "CS-101",
            title: "Principles of Computing, Linux Systems & Version Control",
            credits: 5,
            category: "systems",
            weeklyHours: 5,
            overview: "Deep dive into Unix system architecture, shell scripting, process scheduling, memory hierarchies, and production-grade Git/GitHub collaboration workflows.",
            keyOutcomes: [
              "Master POSIX command line, Bash scripting, pipes, redirection, and environment isolation",
              "Configure modern developer tooling (SSH keys, remote headless servers, Vim/tmux)",
              "Execute multi-branch Git workflows, semantic commits, rebase strategies, and merge resolution"
            ],
            modules: [
              { title: "POSIX Operating System Architecture", description: "Process models, file descriptors, signals, and memory management", topics: ["File Systems", "Permissions", "Pipes", "Process Trees"] },
              { title: "Shell Scripting & System Automation", description: "Bash programming, regular expressions (grep/sed/awk), and automation scripts", topics: ["Regex Parsing", "Cron Jobs", "Environment Variables"] },
              { title: "Collaborative Git Engineering", description: "DAG internals, rebasing, bisect debugging, GitHub Actions CI/CD foundations", topics: ["Git Tree Internals", "Branching Strategies", "CI Automation"] }
            ],
            labProject: "Develop an automated Bash CLI toolkit for remote server monitoring, dataset health validation, and automated GitHub release tagging.",
            textbooks: [
              { title: "The Linux Command Line", author: "William Shotts", type: "book" },
              { title: "Pro Git", author: "Scott Chacon & Ben Straub", type: "book" }
            ]
          },
          {
            id: "mth102",
            code: "MTH-102",
            title: "Discrete Mathematics & Formal Logic for AI",
            credits: 5,
            category: "mathematics",
            weeklyHours: 5,
            overview: "Propositional and predicate calculus, mathematical induction, combinatorics, set theory, and graph theory essential for understanding algorithm bounds and knowledge graphs.",
            keyOutcomes: [
              "Construct rigorous proofs by contradiction, induction, and invariants",
              "Analyze graph properties (trees, DAGs, Eulerian paths, bipartite graphs)",
              "Understand boolean satisfiability (SAT) and relational logic used in modern automated reasoning"
            ],
            modules: [
              { title: "Formal Logic & Proof Techniques", description: "Truth tables, natural deduction, first-order predicate logic, and resolution", topics: ["Predicate Calculus", "Quantifiers", "Inductive Proofs"] },
              { title: "Combinatorics & Probability Spaces", description: "Permutations, combinations, pigeonhole principle, and recurrence relations", topics: ["Generating Functions", "Recurrence Relations"] },
              { title: "Graph Theory Foundations", description: "Graph representations, topological sorting, connected components, and tree traversals", topics: ["DAGs", "Adjacency Matrices", "Graph Isomorphism"] }
            ],
            labProject: "Implement a Propositional Logic Theorem Prover and SAT solver capable of verifying logical consistency of constraint systems.",
            textbooks: [
              { title: "Discrete Mathematics and Its Applications", author: "Kenneth H. Rosen", type: "book" }
            ]
          },
          {
            id: "com101",
            code: "COM-101",
            title: "Technical Communication, Scientific Writing & AI Rhetoric",
            credits: 5,
            category: "communication",
            weeklyHours: 4,
            overview: "Master the art of translating intricate technical and mathematical concepts into lucid research papers, documentation, executive briefings, and oral presentations.",
            keyOutcomes: [
              "Write peer-review caliber research abstracts, methodologies, and literature reviews in LaTeX",
              "Deliver high-impact 5-minute technical lightning talks and research defenses",
              "Critically synthesize seminal computer science papers and evaluate empirical claims"
            ],
            modules: [
              { title: "LaTeX & Scientific Publishing Standards", description: "Document classes, Overleaf workflows, mathematical typesetting, BibTeX citations", topics: ["LaTeX Typography", "Equation Formatting", "BibTeX Management"] },
              { title: "Structure of the Modern AI Paper", description: "Anatomy of NeurIPS/ICLR/ICML papers: Abstracts, Related Work, Ablation Studies", topics: ["Paper Deconstruction", "Ablation Narrative", "Claim Substantiation"] },
              { title: "Oral Presentation & Technical Debate", description: "Slide design for technical audiences, vocal pacing, Q&A defense strategies", topics: ["Slide Visuals", "Whiteboard Explanations", "Handling Hostile Reviewers"] }
            ],
            labProject: "Produce a 10-page LaTeX survey paper evaluating the evolution of transformer architectures, followed by an oral defense before faculty mentors.",
            textbooks: [
              { title: "The Elements of Style", author: "Strunk & White", type: "book" },
              { title: "Writing for Computer Science", author: "Justin Zobel", type: "book" }
            ]
          }
        ]
      },
      {
        semesterNumber: 2,
        termTitle: "Semester 2: Continuous Optimization & Ethical AI Discourse",
        theme: "Multivariable Calculus, Probability & Philosophical Invariants",
        description: "Transition from discrete logic to continuous loss surfaces, multivariable gradients, probability distributions, and the ethical governance of autonomous agents.",
        totalCredits: 20,
        courses: [
          {
            id: "mth103",
            code: "MTH-103",
            title: "Multivariable Calculus & Continuous Optimization",
            credits: 5,
            category: "mathematics",
            weeklyHours: 6,
            overview: "Calculus of vector-valued functions, directional derivatives, partial gradients, Jacobians, Hessian matrices, Taylor approximations, and convex optimization (Lagrange multipliers, KKT conditions).",
            keyOutcomes: [
              "Derive matrix derivatives and vector gradients of quadratic forms and neural loss functions",
              "Analyze curvature through Hessian eigenvalues and saddle points",
              "Implement gradient descent, momentum, and Newton-Raphson optimization methods"
            ],
            modules: [
              { title: "Differential Calculus in Multiple Dimensions", description: "Gradients, directional derivatives, tangent hyperplanes, total differentials", topics: ["Jacobians", "Chain Rule in Higher Dimensions", "Hessians"] },
              { title: "Extreme Values & Saddle Points", description: "Second derivative test, classification of critical points, ill-conditioned surfaces", topics: ["Condition Numbers", "Local Minima", "Saddle Point Escapes"] },
              { title: "Constrained & Unconstrained Optimization", description: "Convex sets and functions, Lagrange multipliers, Karush-Kuhn-Tucker (KKT) conditions", topics: ["Convex Duality", "KKT Conditions", "Gradient Descent Bounds"] }
            ],
            labProject: "Construct a 3D Interactive Loss Surface Visualizer demonstrating optimizer trajectories (SGD vs. Momentum vs. Adam) on non-convex benchmark functions (Rastrigin, Rosenbrock).",
            textbooks: [
              { title: "Convex Optimization", author: "Stephen Boyd & Lieven Vandenberghe", type: "book" },
              { title: "Multivariable Calculus", author: "James Stewart", type: "book" }
            ]
          },
          {
            id: "mth104",
            code: "MTH-104",
            title: "Probability Theory & Stochastic Processes",
            credits: 5,
            category: "mathematics",
            weeklyHours: 5,
            overview: "Axiomatic probability, Bayes' rule, random variables, cumulative distributions, joint/marginal densities, expectation, covariance, Central Limit Theorem, and Markov chains.",
            keyOutcomes: [
              "Formulate Bayesian priors, likelihoods, and posterior probability densities",
              "Understand multivariate Gaussian distributions, covariance ellipsoids, and marginalization",
              "Model sequential processes using stationary discrete-time Markov chains"
            ],
            modules: [
              { title: "Probability Spaces & Conditional Reasoning", description: "Kolmogorov axioms, independence, law of total probability, Bayes' Theorem", topics: ["Bayesian Updating", "Conditional Probability", "Independence"] },
              { title: "Random Variables & Joint Distributions", description: "Discrete and continuous random variables, PDF/CDF, transformations, copulas", topics: ["Gaussian Distributions", "Poisson/Binomial", "Covariance Matrices"] },
              { title: "Limit Theorems & Markov Chains", description: "Law of Large Numbers, Central Limit Theorem, transition matrices, stationary distributions", topics: ["CLT Proofs", "Markov State Transitions", "Ergodicity"] }
            ],
            labProject: "Build a Monte Carlo Markov Chain (MCMC) simulation engine to sample from complex multimodal target probability densities.",
            textbooks: [
              { title: "Introduction to Probability", author: "Dimitri P. Bertsekas & John N. Tsitsiklis", type: "book" }
            ]
          },
          {
            id: "cs102",
            code: "CS-102",
            title: "Object-Oriented Programming & Computational Thinking in Python",
            credits: 5,
            category: "programming",
            weeklyHours: 5,
            overview: "Transition from procedural scripting to robust object-oriented system design in Python. Focus on abstraction, inheritance, polymorphism, clean code, unit testing, and design patterns.",
            keyOutcomes: [
              "Write idiomatic, PEP 8 compliant, type-annotated Python codebases",
              "Design robust object hierarchies using abstract base classes and composition",
              "Implement comprehensive test suites with pytest, mock fixtures, and CI automation"
            ],
            modules: [
              { title: "Python Data Model & Typing", description: "Dunder methods, type hinting (mypy), dataclasses, protocol typing", topics: ["Dunder Methods", "Type Annotations", "Protocols"] },
              { title: "Object-Oriented Architectural Patterns", description: "Factory, Observer, Strategy, Singleton patterns adapted for data-intensive systems", topics: ["Design Patterns", "Abstract Classes", "Composition over Inheritance"] },
              { title: "Engineering Quality & Testing", description: "Unit testing with pytest, mock objects, test coverage analysis, linting with Ruff", topics: ["Pytest Architecture", "Mocking", "Automated Linting"] }
            ],
            labProject: "Engineer an extensible Object-Oriented Simulation Engine for autonomous multi-agent grid environments with full test coverage and automated documentation.",
            textbooks: [
              { title: "Fluent Python (2nd Edition)", author: "Luciano Ramalho", type: "book" }
            ]
          },
          {
            id: "phi101",
            code: "PHI-101",
            title: "Ethics, Algorithmic Bias & Societal Governance of AI",
            credits: 5,
            category: "communication",
            weeklyHours: 4,
            overview: "Critical inquiry into algorithmic fairness, statistical disparate impact, privacy, intellectual property, dual-use technologies, and human-in-the-loop governance frameworks.",
            keyOutcomes: [
              "Formally evaluate algorithmic bias using disparate impact ratio and equalized odds",
              "Navigate differential privacy, GDPR/EU AI Act compliance requirements",
              "Formulate written ethical impact assessments for automated decision systems"
            ],
            modules: [
              { title: "Fairness Metrics in Machine Learning", description: "Demographic parity, equal opportunity, calibration within groups, impossibility theorems", topics: ["Fairness Definitions", "Disparate Impact", "Kleinberg Impossibility"] },
              { title: "Privacy, Data Rights & Surveillance", description: "Differential privacy, membership inference attacks, synthetic data privacy", topics: ["Differential Privacy", "GDPR", "Data Provenance"] },
              { title: "AI Safety & Existential Risk Frameworks", description: "Alignment problem, reward hacking, specification gaming, regulatory treaties", topics: ["Alignment Principles", "EU AI Act Tiers", "Institutional Audits"] }
            ],
            labProject: "Audit an actual credit-scoring or criminal recidivism dataset using AIF360, produce a fairness remediation pipeline, and author an executive policy brief.",
            textbooks: [
              { title: "Weapons of Math Destruction", author: "Cathy O'Neil", type: "book" },
              { title: "The Alignment Problem", author: "Brian Christian", type: "book" }
            ]
          }
        ]
      }
    ]
  },
  {
    yearNumber: 2,
    title: "Year 2: Algorithms & Data Science Foundations",
    subtitle: "High-Performance Python, Data Structures & Predictive Modeling",
    focusArea: "programmers and Data Science foundations, focusing on algorithms and Python development.",
    heroImage: "/src/assets/images/year2_algorithms_python_1791017087802.jpg",
    executiveSummary: "Sophomore year turns foundational theory into industrial-grade engineering capability. You will master Data Structures & Algorithms (trees, graphs, dynamic programming), achieve elite Python mastery (generators, memory layout, vectorization with NumPy), and construct robust data science pipelines across SQL, Vector databases, and classical statistical learning models.",
    milestoneTitle: "The Algorithmic Benchmark & Kaggle Debut",
    milestoneDescription: "Every sophomore solves 150+ medium/hard algorithmic challenges, writes their own vector database from scratch, and competes in an international competitive data science benchmark.",
    milestoneDeliverable: "Custom Distributed Vector Storage Engine + Top 10% Kaggle Benchmark Solution + GitHub Verified Algorithm Repository",
    directorAdvice: "Algorithms are the mental gym of computer science. When you face a graph problem or a dynamic programming recurrence, don't guess—derive the optimal substructure. Code in Python until vectorization feels natural and loops feel like a last resort. Keep your code clean, modular, and profiled.",
    semesters: [
      {
        semesterNumber: 3,
        termTitle: "Semester 3: Data Structures, Advanced Algorithms & Vector Systems",
        theme: "Complexity Theory, Memory Optimization & Spatial Indexing",
        description: "Build deep fluency in complex data structures, Big-O asymptotic analysis, tree/graph traversal, and modern high-dimensional vector search algorithms (HNSW).",
        totalCredits: 20,
        courses: [
          {
            id: "cs201",
            code: "CS-201",
            title: "Data Structures & Algorithmic Analysis",
            credits: 5,
            category: "programming",
            weeklyHours: 6,
            overview: "Comprehensive study of arrays, linked lists, hash tables, balanced BSTs (AVL, Red-Black), heaps, tries, graph algorithms (Dijkstra, Bellman-Ford, Kruskal), and amortized analysis.",
            keyOutcomes: [
              "Analyze time and space complexity using Big-O, Big-Omega, and Master Theorem",
              "Implement self-balancing search trees, disjoint set unions (Union-Find), and binary heaps",
              "Execute graph traversals, shortest-path computations, and network flow algorithms"
            ],
            modules: [
              { title: "Linear Structures & Hash Maps", description: "Collision resolution strategies, load factors, amortized expansion, memory locality", topics: ["Open Addressing", "Robin Hood Hashing", "Amortized Bounds"] },
              { title: "Trees & Priority Queues", description: "AVL trees, red-black invariant balance, binary/fibonacci heaps, segment trees", topics: ["Red-Black Balancing", "Min/Max Heaps", "Segment Trees"] },
              { title: "Graph Algorithms", description: "BFS/DFS, Topological Sort, Dijkstra, A*, Floyd-Warshall, minimum spanning trees", topics: ["Dijkstra's Algorithm", "A* Heuristic", "Kruskal / Prim"] }
            ],
            labProject: "Build an in-memory high-throughput Geospatial & Graph Routing Engine capable of calculating optimal delivery paths across 100,000 nodes in under 20ms.",
            textbooks: [
              { title: "Introduction to Algorithms (CLRS)", author: "Cormen, Leiserson, Rivest, Stein", type: "book" },
              { title: "Algorithms (4th Edition)", author: "Robert Sedgewick & Kevin Wayne", type: "book" }
            ]
          },
          {
            id: "cs202",
            code: "CS-202",
            title: "Advanced Python Engineering & High-Performance Computing",
            credits: 5,
            category: "programming",
            weeklyHours: 6,
            overview: "Master Python internals: CPython memory model, GIL, bytecode compilation, generators, decorators, context managers, multiprocessing, Cython, and SIMD vectorization with NumPy.",
            keyOutcomes: [
              "Profile and eliminate Python bottlenecks using cProfile, memory_profiler, and line_profiler",
              "Leverage memory views, NumPy striding, broadcasting, and vectorization for 100x speedups",
              "Orchestrate asynchronous I/O and concurrent parallel workloads using asyncio and multiprocessing"
            ],
            modules: [
              { title: "CPython Internals & Metaprogramming", description: "Memory allocation, reference counting, GC cycles, class decorators, metaclasses", topics: ["GIL Mechanics", "Metaclasses", "Descriptor Protocol"] },
              { title: "NumPy Architecture & Vectorization", description: "NDArray memory layout, strides, broadcasting rules, ufuncs, BLAS/LAPACK bindings", topics: ["Stride Tricks", "Memory Alignment", "Broadcasting"] },
              { title: "Concurrency & High-Speed Extensions", description: "Asyncio event loops, multiprocessing queues, Cython C-bindings, Numba JIT compiling", topics: ["Asyncio Coroutines", "Numba JIT", "Multiprocessing Pools"] }
            ],
            labProject: "Develop a custom High-Performance Vector Database in Python/Cython featuring Hierarchical Navigable Small World (HNSW) indexing and SIMD-accelerated cosine similarity.",
            textbooks: [
              { title: "High Performance Python (2nd Edition)", author: "Micha Gorelick & Ian Ozsvald", type: "book" }
            ]
          },
          {
            id: "ds201",
            code: "DS-201",
            title: "Relational, Distributed & Vector Database Systems",
            credits: 5,
            category: "systems",
            weeklyHours: 5,
            overview: "Relational database modeling, SQL window functions, query execution planning, indexing strategies (B-Tree, GiST, GIN), NoSQL architectures, and vector embeddings storage.",
            keyOutcomes: [
              "Formulate complex analytical SQL queries using CTEs, window functions, and recursive joins",
              "Optimize query plans using EXPLAIN ANALYZE, index selection, and partition strategies",
              "Implement semantic hybrid search combining full-text search with pgvector embeddings"
            ],
            modules: [
              { title: "Relational Theory & Advanced SQL", description: "Normalization (1NF to BCNF), ACID guarantees, transactions, window functions, CTEs", topics: ["ACID Isolation Levels", "Window Functions", "Recursive CTEs"] },
              { title: "Database Internals & Index Optimization", description: "B-Tree vs Hash vs LSM-trees, write-ahead logging, query planner costs", topics: ["Execution Plans", "B-Tree Mechanics", "LSM-Trees"] },
              { title: "Vector & Modern Search Systems", description: "PostgreSQL pgvector, inverted indices, Approximate Nearest Neighbor (ANN), hybrid search", topics: ["pgvector Tuning", "Inverted Indices", "Hybrid Scoring"] }
            ],
            labProject: "Design and benchmark an Enterprise E-Commerce Product Catalog supporting hybrid search across 1,000,000 items with sub-50ms latency.",
            textbooks: [
              { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann", type: "book" }
            ]
          },
          {
            id: "ds202",
            code: "DS-202",
            title: "Exploratory Data Analysis, Visualization & Scientific Wrangling",
            credits: 5,
            category: "machine_learning",
            weeklyHours: 4,
            overview: "Data cleaning, imputation of missing data, statistical outliers, multivariate feature transformations, interactive visualization with Polars, Pandas, Seaborn, and Plotly.",
            keyOutcomes: [
              "Process large multi-gigabyte datasets efficiently using Polars and Apache Arrow",
              "Design publication-quality interactive visual dashboards communicating data distributions",
              "Execute rigorous statistical sanity checks, hypothesis tests, and anomaly detection"
            ],
            modules: [
              { title: "Modern Data Frames (Polars & Arrow)", description: "Lazy execution graphs, memory-mapped tables, streaming execution, schema enforcement", topics: ["Polars LazyFrames", "Apache Arrow", "Memory Footprints"] },
              { title: "Visual Storytelling & Statistical Graphics", description: "Grammar of Graphics, perceptual color palettes, multivariate interaction plots", topics: ["Grammar of Graphics", "Seaborn / Plotly", "Faceting"] },
              { title: "Feature Engineering & Imputation", description: "Handling missing data, box-cox transforms, categorical encoding, leakage prevention", topics: ["Target Encoding", "Outlier Truncation", "Data Leakage Guardrails"] }
            ],
            labProject: "Create an Interactive Financial Risk & Market Volatility Intelligence Dashboard deployed with automated daily ingestion of SEC filings.",
            textbooks: [
              { title: "Python for Data Analysis (3rd Edition)", author: "Wes McKinney", type: "book" }
            ]
          }
        ]
      },
      {
        semesterNumber: 4,
        termTitle: "Semester 4: Classical Machine Learning & Algorithmic Optimization",
        theme: "Statistical Learning, Model Generalization & Complexity Taming",
        description: "Study supervised and unsupervised learning algorithms from mathematical formulation to implementation, model validation, and deployment pipelines.",
        totalCredits: 20,
        courses: [
          {
            id: "ml201",
            code: "ML-201",
            title: "Statistical Machine Learning: Supervised Foundations",
            credits: 5,
            category: "machine_learning",
            weeklyHours: 6,
            overview: "Mathematical derivations and scikit-learn implementations of Ordinary Least Squares, Ridge/Lasso regularization, Logistic Regression, Support Vector Machines (SVM), and Kernel Tricks.",
            keyOutcomes: [
              "Derive closed-form OLS solutions, gradient updates, and dual formulations for SVMs",
              "Understand bias-variance tradeoff, cross-validation strategies, and regularization mechanics",
              "Implement custom estimator classes compatible with scikit-learn pipelines"
            ],
            modules: [
              { title: "Linear Models & Regularization", description: "OLS, Maximum Likelihood Estimation, L1/L2 penalties, elastic net, coordinate descent", topics: ["MLE vs MAP", "Lasso Sparsity", "Regularization Paths"] },
              { title: "Classification & Kernel Methods", description: "Log-odds, ROC/AUC analysis, maximum margin hyperplanes, Mercer's theorem, RBF kernels", topics: ["Margin Optimization", "Kernel Trick", "Multiclass Strategies"] },
              { title: "Evaluation & Validation Rigor", description: "Stratified k-fold, nested cross-validation, permutation tests, calibration curves", topics: ["Nested Cross-Validation", "Brier Score", "Confidence Intervals"] }
            ],
            labProject: "Author a complete Machine Learning Library from scratch implementing Ridge Regression, Logistic Regression, and Hard-Margin SVM using pure NumPy and gradient solvers.",
            textbooks: [
              { title: "The Elements of Statistical Learning", author: "Hastie, Tibshirani, Friedman", type: "book" },
              { title: "Pattern Recognition and Machine Learning", author: "Christopher M. Bishop", type: "book" }
            ]
          },
          {
            id: "ml202",
            code: "ML-202",
            title: "Ensemble Methods, Decision Trees & Gradient Boosting",
            credits: 5,
            category: "machine_learning",
            weeklyHours: 6,
            overview: "Information theory (entropy, Gini impurity), CART decision trees, Bagging, Random Forests, AdaBoost, and modern gradient boosting frameworks (XGBoost, LightGBM, CatBoost).",
            keyOutcomes: [
              "Implement CART decision tree splitting algorithms and calculate mutual information gains",
              "Explain gradient boosting as functional gradient descent in function space",
              "Tune complex tree hyperparameters using Bayesian optimization (Optuna)"
            ],
            modules: [
              { title: "Decision Trees & Information Theory", description: "Shannon entropy, information gain, variance reduction, pruning heuristics", topics: ["Entropy Math", "CART Splitting", "Cost-Complexity Pruning"] },
              { title: "Bagging & Random Forests", description: "Bootstrap aggregation, out-of-bag error estimation, feature subsampling, permutation importance", topics: ["OOB Estimation", "Feature Importance", "Tree Ensembling"] },
              { title: "Gradient Boosting Architecture", description: "Loss function gradients, pseudo-residuals, histogram-based splits, leaf-wise growth", topics: ["XGBoost Loss Formulations", "LightGBM Histograms", "Hyperparameter Search"] }
            ],
            labProject: "Compete in an official Kaggle tabular prediction competition, constructing an ensemble pipeline (XGBoost + LightGBM + CatBoost + Stacking) achieving top-tier leaderboard placement.",
            textbooks: [
              { title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow", author: "Aurélien Géron", type: "book" }
            ]
          },
          {
            id: "cs203",
            code: "CS-203",
            title: "Dynamic Programming, Greedy Algorithms & NP-Completeness",
            credits: 5,
            category: "programming",
            weeklyHours: 5,
            overview: "Master advanced problem-solving paradigms: optimal substructure, overlapping subproblems, memoization, bottom-up tabulation, greedy choice property, and reductions to NP-Complete problems.",
            keyOutcomes: [
              "Formulate recurrence relations for complex multidimensional dynamic programming problems",
              "Solve classic hard problems: Knapsack, Matrix Chain Multiplication, TSP, Longest Common Subsequence",
              "Demonstrate polynomial-time reductions for 3-SAT, Vertex Cover, and Independent Set"
            ],
            modules: [
              { title: "Dynamic Programming Recurrences", description: "1D, 2D, and Bitmask DP formulations, state transition invariants, space optimizations", topics: ["Memoization vs Tabulation", "Bitmask DP", "Digit DP"] },
              { title: "Greedy Strategy & Matroids", description: "Greedy choice verification, Huffman coding, interval scheduling, matroid theory", topics: ["Exchange Arguments", "Huffman Trees", "Matroid Axioms"] },
              { title: "Intractability & NP-Completeness", description: "Turing reductions, Cook-Levin theorem, approximation algorithms, branch-and-bound", topics: ["P vs NP", "Cook-Levin Theorem", "Approximation Ratios"] }
            ],
            labProject: "Solve and document 100 curated LeetCode Medium/Hard algorithmic challenges with optimal time/space complexity derivations in a published technical repository.",
            textbooks: [
              { title: "Algorithm Design", author: "Jon Kleinberg & Éva Tardos", type: "book" }
            ]
          },
          {
            id: "ml203",
            code: "ML-203",
            title: "Unsupervised Learning, Clustering & Dimensionality Reduction",
            credits: 5,
            category: "machine_learning",
            weeklyHours: 4,
            overview: "K-Means, Gaussian Mixture Models (EM Algorithm), Hierarchical Clustering, DBSCAN, Principal Component Analysis (PCA), t-SNE, and UMAP manifold learning.",
            keyOutcomes: [
              "Derive and code the Expectation-Maximization (EM) algorithm for GMMs",
              "Compute PCA projections via covariance eigenvectors and compare with SVD",
              "Apply non-linear manifold embeddings (UMAP) for latent space visualization"
            ],
            modules: [
              { title: "Clustering Algorithms", description: "K-Means++, silhouette scores, DBSCAN density reachability, spectral clustering", topics: ["K-Means++ Initialization", "Silhouette Analysis", "DBSCAN Epsilon Tuning"] },
              { title: "Probabilistic Modeling & EM", description: "Latent variables, Jensen's inequality, Expectation-Maximization derivation, soft clustering", topics: ["EM Convergence", "Gaussian Mixture Models", "ELBO Foundations"] },
              { title: "Manifold Learning & Projections", description: "PCA reconstruction error, Kernel PCA, t-SNE perplexity, UMAP simplicial complexes", topics: ["PCA Eigenvalues", "t-SNE Kullback-Leibler", "UMAP Topology"] }
            ],
            labProject: "Develop an Unsupervised Anomaly Detection & Customer Segmentation Engine for credit card transactions with interactive 3D UMAP manifold projections.",
            textbooks: [
              { title: "Pattern Recognition and Machine Learning", author: "Christopher M. Bishop", type: "book" }
            ]
          }
        ]
      }
    ]
  },
  {
    yearNumber: 3,
    title: "Year 3: AI Projects, Exhibition & Industry Networking",
    subtitle: "Deep Learning, Autonomous Agents, Capstone Demo Day & Corporate Mentorship",
    focusArea: "Ai working projects and exibhition for final presentations and industry networking events.",
    heroImage: "/src/assets/images/year3_ai_exhibition_1791017103494.jpg",
    executiveSummary: "Junior year is the crucible of tangible creation. You move into cutting-edge Deep Learning architectures (Transformers, Diffusion, Multi-Agent systems, MLOps) and collaborate in small engineering teams to build ambitious, real-world AI applications. The crown jewel of this year is the annual AlgoGenius AI Innovation Expo—a public exhibition and demo day attended by venture capitalists, tech executives, and research directors.",
    milestoneTitle: "The Annual AlgoGenius AI Innovation Expo & Capstone Exhibition",
    milestoneDescription: "Teams present fully functional production AI systems at physical exhibition booths, defend their architectures before an industry jury, and participate in direct VIP networking sessions with hiring executives.",
    milestoneDeliverable: "Production Deployed AI System + Published Research Paper / Technical Whitepaper + Live 5-Minute Stage Pitch to Investors & Directors",
    directorAdvice: "Do not build toy projects. The world has enough generic wrapper apps. Build systems that solve hard, intractable problems: multi-agent reasoning, low-latency edge computer vision, automated medical triage, or neuromorphic control. At the Expo, you must be able to explain both the highest-level business value and the deepest mathematical invariant of your loss function.",
    semesters: [
      {
        semesterNumber: 5,
        termTitle: "Semester 5: Deep Learning Architectures, Transformers & MLOps",
        theme: "Neural Network Mechanics, Large-Scale Perception & Production Pipelines",
        description: "Master modern PyTorch, backpropagation from first principles, convolutional backbones, self-attention mechanics, transformer scaling laws, and MLOps deployment architectures.",
        totalCredits: 20,
        courses: [
          {
            id: "dl301",
            code: "DL-301",
            title: "Deep Learning Fundamentals & PyTorch Framework Mastery",
            credits: 5,
            category: "machine_learning",
            weeklyHours: 6,
            overview: "Computational graphs, autograd engine mechanics, forward/backward passes from scratch, weight initialization (He, Xavier), batch/layer normalization, residual connections, and distributed data parallel training.",
            keyOutcomes: [
              "Code a complete micro-autograd engine from scratch implementing reverse-mode automatic differentiation",
              "Train deep convolutional networks and residual architectures with custom CUDA/PyTorch hooks",
              "Orchestrate multi-GPU training using PyTorch DistributedDataParallel (DDP) and mixed precision (FP16/BF16)"
            ],
            modules: [
              { title: "Autograd & Computational Graphs", description: "Reverse-mode automatic differentiation, DAG node caching, custom PyTorch autograd functions", topics: ["Micrograd Engine", "Backward Hooks", "Gradient Checking"] },
              { title: "Optimization Dynamics & Stabilization", description: "Vanishing/exploding gradients, weight decay, AdamW, cosine annealing schedules, LayerNorm vs BatchNorm", topics: ["AdamW Mechanics", "Gradient Clipping", "Residual Gradients"] },
              { title: "Large-Scale Training Infrastructure", description: "DistributedDataParallel, gradient accumulation, FlashAttention kernel integration, memory profiling", topics: ["DDP Architecture", "Mixed Precision (AMP)", "FlashAttention"] }
            ],
            labProject: "Build an open-source PyTorch library implementing custom attention layers and memory-efficient backpropagation for high-resolution visual feature extraction.",
            textbooks: [
              { title: "Deep Learning", author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville", type: "book" },
              { title: "PyTorch Pocket Reference", author: "Joe Papa", type: "book" }
            ]
          },
          {
            id: "dl302",
            code: "DL-302",
            title: "Transformers, Large Language Models & Attention Mechanisms",
            credits: 5,
            category: "machine_learning",
            weeklyHours: 6,
            overview: "Deep deconstruction of 'Attention Is All You Need': Scaled dot-product attention, multi-head projections, positional encodings (RoPE, ALiBi), causal masking, decoder-only architectures, and KV cache optimization.",
            keyOutcomes: [
              "Write a complete Decoder-Only Transformer (GPT-style) from raw PyTorch modules",
              "Implement key-value (KV) caching and speculative decoding for low-latency text generation",
              "Execute parameter-efficient fine-tuning (LoRA, QLoRA) on open-weights foundation models"
            ],
            modules: [
              { title: "Attention Mathematics & Mechanics", description: "Queries, keys, values, softmax temperature scaling, multi-head projection tensors", topics: ["Scaled Dot-Product", "Multi-Head Attention", "RoPE Embeddings"] },
              { title: "Autoregressive Generation & Inference Engines", description: "KV-cache memory allocation, beam search, nucleus sampling (top-p/top-k), speculative decoding", topics: ["KV Cache Optimization", "Top-p / Top-k Sampling", "vLLM PagedAttention"] },
              { title: "Fine-Tuning & Alignment Paradigms", description: "LoRA rank decomposition, 4-bit quantization, Direct Preference Optimization (DPO), RLHF", topics: ["LoRA Math", "QLoRA Quantization", "DPO vs RLHF"] }
            ],
            labProject: "Train a 125M-parameter domain-specialized language model from scratch on curated technical documentation, complete with custom tokenizer and evaluation harness.",
            textbooks: [
              { title: "Natural Language Processing with Transformers", author: "Lewis Tunstall et al.", type: "book" }
            ]
          },
          {
            id: "sys301",
            code: "SYS-301",
            title: "Production MLOps, Containerization & High-Throughput Serving",
            credits: 5,
            category: "systems",
            weeklyHours: 5,
            overview: "Bridging model weights to production web services: FastAPI asynchronous endpoints, Docker containerization, ONNX runtime conversion, TensorRT engine optimization, and Triton Inference Server.",
            keyOutcomes: [
              "Package ML inference services in minimal, secure Docker containers with GPU passthrough",
              "Convert and quantize PyTorch checkpoints to ONNX and TensorRT with 4x throughput improvements",
              "Implement robust experiment tracking, model registry, and data drift monitoring using Weights & Biases"
            ],
            modules: [
              { title: "Async Serving & API Architecture", description: "FastAPI asynchronous concurrency, batch request pooling, pydantic serialization, health endpoints", topics: ["Dynamic Batching", "FastAPI Concurrency", "gRPC vs REST"] },
              { title: "Inference Acceleration & Compilers", description: "ONNX graph optimization, TensorRT INT8/FP16 execution engines, Triton Server deployment", topics: ["TensorRT Quantization", "ONNX Graph Surgery", "Triton Pipelines"] },
              { title: "CI/CD & Monitoring Invariants", description: "GitHub Actions model testing, Prometheus telemetry, evidently data drift detection, canary deploys", topics: ["Data Drift Monitoring", "Canary Deployments", "Artifact Versioning"] }
            ],
            labProject: "Architect an end-to-end MLOps pipeline that automatically benchmarks incoming model checkpoints, builds optimized Docker images, and deploys to a Kubernetes cluster.",
            textbooks: [
              { title: "Building Machine Learning Pipelines", author: "Hannes Hapke & Catherine Nelson", type: "book" }
            ]
          },
          {
            id: "cap301",
            code: "CAP-301",
            title: "Capstone Incubation & Research Methodology",
            credits: 5,
            category: "capstone",
            weeklyHours: 4,
            overview: "Team formation, problem discovery, literature review, architectural specification, hardware budgeting, and project milestone roadmapping for the Junior Year Exhibition.",
            keyOutcomes: [
              "Form 3-to-4 person interdisciplinary engineering teams with clearly defined role charters",
              "Draft an industry-ready Engineering Design Document (EDD) and compute allocation proposal",
              "Construct working minimum viable proofs-of-concept tested against rigorous synthetic benchmarks"
            ],
            modules: [
              { title: "Problem Definition & Literature Audit", description: "Identifying high-leverage domains, state-of-the-art gap analysis, baseline reproducibility", topics: ["SOTA Benchmarking", "EDD Authoring", "Threat Modeling"] },
              { title: "System Architecture & Interface Design", description: "Microservice boundaries, contract testing, data pipeline resilience, fallback behaviors", topics: ["Interface Contracts", "Latency Budgets", "Hardware Cost Modeling"] },
              { title: "Agile AI Sprint Execution", description: "Two-week sprint cadences, automated ablation logging, team code reviews, failure post-mortems", topics: ["Sprint Planning", "Code Review Standards", "Ablation Tracking"] }
            ],
            labProject: "Produce a finalized Engineering Design Document and running prototype ready for Semester 6 exhibition scaling.",
            textbooks: [
              { title: "Designing Machine Learning Systems", author: "Chip Huyen", type: "book" }
            ]
          }
        ]
      },
      {
        semesterNumber: 6,
        termTitle: "Semester 6: Capstone Project Execution & The AlgoGenius Innovation Expo",
        theme: "Exhibition Showcase, Live Demonstrations & Industry Networking",
        description: "Full-time project sprint leading into the public AlgoGenius Innovation Expo, featuring live booth demonstrations, executive keynotes, and targeted recruitment networking.",
        totalCredits: 20,
        courses: [
          {
            id: "cap302",
            code: "CAP-302",
            title: "Advanced AI Capstone Engineering & System Hardening",
            credits: 8,
            category: "capstone",
            weeklyHours: 10,
            overview: "Full-scale implementation, testing, stress-testing, and latency optimization of the team's capstone project. Integration of multimodal inputs, real-time edge processing, and user interfaces.",
            keyOutcomes: [
              "Deliver an enterprise-grade AI system with 99.9% uptime and validated benchmark accuracy",
              "Execute rigorous fault-injection tests, out-of-distribution adversarial attacks, and latency stress runs",
              "Deploy a consumer-facing web/edge interface enabling seamless user interaction during live demos"
            ],
            modules: [
              { title: "Production Scaling & Stress Testing", description: "Locust load testing, GPU memory leak profiling, failover fallback systems, rate limiting", topics: ["Load Testing", "GPU Out-of-Memory Recovery", "Circuit Breakers"] },
              { title: "Adversarial Robustness & Safety", description: "Jailbreak guardrails, prompt injection shields, automated red-teaming, data privacy sanitizers", topics: ["Guardrail Pipelines", "Red-Teaming", "PII Scrubbing"] },
              { title: "Interface & Interactive Polish", description: "Low-latency streaming responses, WebSocket audio/video pipes, responsive data visualizations", topics: ["Server-Sent Events", "WebRTC Streaming", "Live Telemetry"] }
            ],
            labProject: "Deploy the completed Capstone Application live to production servers with automated monitoring and interactive demonstration modes.",
            textbooks: [
              { title: "Engineering MLOps", author: "Emmanuel Raj", type: "book" }
            ]
          },
          {
            id: "exp301",
            code: "EXP-301",
            title: "The AlgoGenius AI Innovation Expo & Demo Day Presentation",
            credits: 6,
            category: "capstone",
            weeklyHours: 8,
            overview: "Preparation and execution of public physical and virtual exhibition booths, live stage presentations, demonstration video reels, and peer evaluations before an esteemed industry jury.",
            keyOutcomes: [
              "Design an engaging physical exhibition booth with live hardware/software interactive displays",
              "Deliver a compelling 5-minute technical pitch and survive a 5-minute technical cross-examination",
              "Publish an interactive project landing page, documentation portal, and video demonstration reel"
            ],
            modules: [
              { title: "Exhibition Booth Strategy & UX", description: "Booth flow design, interactive touchpoints, live demo resilience against network failures", topics: ["Demo Resilience", "Booth Architecture", "Physical-Digital Bridging"] },
              { title: "The Executive Stage Pitch", description: "Narrative arc: problem severity, technological breakthrough, empirical metrics, future vision", topics: ["Pitch Deck Design", "Executive Delivery", "Metric Visualization"] },
              { title: "Technical Defense & Cross-Examination", description: "Defending architectural trade-offs, computational cost justification, ethical governance", topics: ["Jury Defense", "Handling Challenging Questions", "Intellectual Rigor"] }
            ],
            labProject: "Present the team capstone at the annual AlgoGenius AI Innovation Expo, competing for the prestigious AlgoGenius Laureate Award and VC pilot grants.",
            textbooks: [
              { title: "To Sell Is Human", author: "Daniel H. Pink", type: "book" }
            ]
          },
          {
            id: "net301",
            code: "NET-301",
            title: "Industry Networking, Mentorship & Corporate Partnerships",
            credits: 6,
            category: "career",
            weeklyHours: 6,
            overview: "Structured 1-on-1 mentorship pairings with Senior Staff and Principal AI Engineers from leading tech corporations. Strategy sessions on summer research internships and venture incubation.",
            keyOutcomes: [
              "Engage in structured bi-weekly 1-on-1 strategy sessions with designated industry executive mentors",
              "Optimize professional GitHub, LinkedIn, and personal engineering portfolios for Tier-1 scrutiny",
              "Secure Tier-1 summer research/engineering internship offers ahead of the senior placement drive"
            ],
            modules: [
              { title: "Industry Executive Mentorship", description: "Bi-weekly deep dives on industry engineering standards, research trends, and organizational structure", topics: ["Mentor Engagements", "Tech Org Navigation", "Research Horizons"] },
              { title: "Portfolio Curation & Open-Source Presence", description: "Crafting technical case studies, README visual polish, interactive demo hosting, writing blog posts", topics: ["Technical Case Studies", "Open Source Promotion", "Engineering Brand"] },
              { title: "Internship Conversion & Career Negotiation", description: "Maximizing summer internship impact, securing return full-time offers, navigating equity/compensation", topics: ["Return Offer Strategy", "Compensation Basics", "Internship Excellence"] }
            ],
            labProject: "Complete a verified Industry Mentorship Review and publish two comprehensive engineering deep-dive articles based on your capstone research.",
            textbooks: [
              { title: "The Tech Resume Inside Out", author: "Gergely Orosz", type: "book" }
            ]
          }
        ]
      }
    ]
  },
  {
    yearNumber: 4,
    title: "Year 4: Tech Placement & Industry Launch",
    subtitle: "Interview Bootcamps, System Design, Corporate Placement & Graduation",
    focusArea: "job opportunities and interview prep sessions leading into graduation and placement in top tech firms.",
    heroImage: "/src/assets/images/year4_tech_recruitment_1791017114185.jpg",
    executiveSummary: "Senior year is dedicated to your triumphant transition into the elite tech ecosystem. You will undergo exhaustive interview preparation across algorithmic coding, machine learning system design, deep learning theoretical defenses, and behavioral bar-raisers. Supported by our dedicated Corporate Placement Cell, you will participate in exclusive on-campus recruitment drives with top tech firms, AI research labs, and high-frequency quantitative hedge funds.",
    milestoneTitle: "The AlgoGenius Placement Drive & Graduation Induction",
    milestoneDescription: "100% of seniors undergo structured multi-stage mock interviews with external hiring managers, receive tailored negotiation coaching, and participate in exclusive hiring rounds.",
    milestoneDeliverable: "Secured Tier-1 Offer Letter / Research Fellowship + Defended Senior Thesis + Induction into AlgoGenius Alumni Council",
    directorAdvice: "You have spent three years building unshakeable mathematical, algorithmic, and practical competence. Now is the time to express that mastery with poise, structure, and clarity under pressure. In interviews, do not rush to write code immediately: ask clarifying questions, evaluate trade-offs, calculate computational bounds, and communicate like a future technical lead.",
    semesters: [
      {
        semesterNumber: 7,
        termTitle: "Semester 7: Large-Scale AI System Design & Interview Intensive",
        theme: "System Scalability, Whiteboard Algorithmic Defense & Mock Panels",
        description: "Master the design of petabyte-scale machine learning systems and conquer the rigorous multi-stage technical interview loops of the world's most selective technology firms.",
        totalCredits: 20,
        courses: [
          {
            id: "int401",
            code: "INT-401",
            title: "Advanced Algorithmic & Data Structures Interview Bootcamp",
            credits: 6,
            category: "career",
            weeklyHours: 8,
            overview: "Intensive timed problem solving focused on LeetCode Hard paradigms: dynamic programming with bitmasks, monotonic stacks, union-find with path compression, shortest-path variants, and Trie networks.",
            keyOutcomes: [
              "Solve LeetCode Hard algorithmic problems in under 30 minutes with optimal time and space complexity",
              "Verbalize thought processes with total clarity while coding live in Google Docs or CoderPad",
              "Construct comprehensive edge-case test matrices before executing or testing code solutions"
            ],
            modules: [
              { title: "Advanced Dynamic Programming & Graphs", description: "State transitions, topological sorting with Kahn's algorithm, bipartite matching, Fenwick trees", topics: ["Bitmask Recurrences", "Kahn's Algorithm", "Fenwick Trees"] },
              { title: "Monotonic Structures & Sliding Windows", description: "Monotonic queues, next greater element, two-pointer boundaries, prefix sums with hashing", topics: ["Monotonic Deque", "Sliding Window Maximum", "Prefix Sum Trees"] },
              { title: "Live Whiteboard Simulation Labs", description: "Weekly peer-to-peer and faculty-proctored live timed coding interviews under intense scrutiny", topics: ["CoderPad Etiquette", "Edge Case Probing", "Verbalizing Trade-Offs"] }
            ],
            labProject: "Complete 12 proctored 45-minute live technical coding interview simulations with feedback scorecards from senior FAANG software engineers.",
            textbooks: [
              { title: "Cracking the Coding Interview (6th Edition)", author: "Gayle Laakmann McDowell", type: "book" }
            ]
          },
          {
            id: "sys401",
            code: "SYS-401",
            title: "Large-Scale Machine Learning System Design",
            credits: 6,
            category: "systems",
            weeklyHours: 8,
            overview: "Architecting real-world machine learning systems at scale: Recommendation engines (YouTube/Netflix), search ranking (Google), real-time fraud detection, autonomous driving perception, and large language model inference clusters.",
            keyOutcomes: [
              "Structure 45-minute ML system design interviews using the standard industry 6-step framework",
              "Design high-throughput candidate generation (retrieval), feature stores (Feast), and two-tower ranking pipelines",
              "Calculate memory, bandwidth, compute, and latency budgets for multi-million QPS systems"
            ],
            modules: [
              { title: "The System Design Blueprint", description: "Problem clarification, metric selection (CTR, NDCG, Latency), data pipeline, feature engineering", topics: ["6-Step ML Design Framework", "Business vs Offline Metrics", "Data Flywheels"] },
              { title: "Two-Tower & Retrieval Architectures", description: "Embedding generation, approximate nearest neighbor (ANN) at scale, real-time feature extraction", topics: ["Two-Tower Models", "Feature Store (Feast)", "ANN Index Sharding"] },
              { title: "LLM Systems & Infrastructure Design", description: "Serving cluster sizing, vLLM / TensorRT-LLM, KV cache distribution, prompt routing, semantic caching", topics: ["LLM Serving Clusters", "Semantic Caching", "Speculative Routing"] }
            ],
            labProject: "Draft and defend end-to-end Architectural System Designs for: 1) A Real-Time Video Recommendation Engine, and 2) A Distributed Multimodal Agentic Assistant serving 50M daily active users.",
            textbooks: [
              { title: "Machine Learning System Design Interview", author: "Ali Aminian & Alex Xu", type: "book" },
              { title: "System Design Interview – An Insider's Guide (Volume 2)", author: "Alex Xu & Sahn Lam", type: "book" }
            ]
          },
          {
            id: "ml401",
            code: "ML-401",
            title: "Machine Learning Theory & Deep Learning Bar-Raiser Defense",
            credits: 4,
            category: "machine_learning",
            weeklyHours: 5,
            overview: "Whiteboard derivations of fundamental ML/DL concepts frequently tested in Tier-1 Research and ML Engineering loops: backprop mathematics, transformer parameter counts, loss derivations, and generalization bounds.",
            keyOutcomes: [
              "Derive backpropagation gradients through attention matrices and normalization layers without notes",
              "Calculate exact parameter counts and memory requirements for arbitrary transformer sizes",
              "Diagnose training failure modes (vanishing gradients, loss spikes, mode collapse, reward hacking)"
            ],
            modules: [
              { title: "Mathematical Whiteboard Derivations", description: "Softmax gradient derivation, cross-entropy loss, LayerNorm gradients, SVD properties", topics: ["Softmax Gradient Proof", "LayerNorm Backprop", "Cross-Entropy Bounds"] },
              { title: "Transformer Arithmetic & Scaling Laws", description: "FLOPs per token calculation, Chinchilla scaling laws, memory breakdown (weights vs KV cache vs activations)", topics: ["Chinchilla Laws", "FLOPs Accounting", "Activation Memory Math"] },
              { title: "Debugging & Empirical Diagnostics", description: "Diagnosing loss divergence, gradient explosion, learning rate warmup necessity, weight decay tuning", topics: ["Loss Divergence Recovery", "Warmup Mathematics", "Overfitting Remedies"] }
            ],
            labProject: "Complete a 100-question oral examination covering theoretical deep learning and machine learning mathematics with institute fellows.",
            textbooks: [
              { title: "Deep Learning Interviews", author: "Shlomo Kashani", type: "book" }
            ]
          },
          {
            id: "car401",
            code: "CAR-401",
            title: "Behavioral Leadership, STAR Framework & Negotiation",
            credits: 4,
            category: "career",
            weeklyHours: 4,
            overview: "Mastering the non-technical dimensions of senior recruiting: Amazon Leadership Principles, Google 'Googliness', resolving technical disagreements, ethical dilemmas, and equity/compensation negotiation.",
            keyOutcomes: [
              "Structure behavioral answers using the Situation-Task-Action-Result (STAR) methodology with quantitative impact",
              "Articulate past engineering failures, conflicts, and trade-offs with maturity and accountability",
              "Evaluate total compensation packages (Base, Equity/RSUs, Sign-on, Performance Bonuses) and negotiate effectively"
            ],
            modules: [
              { title: "The STAR Technique for Engineers", description: "Crafting a bank of 15 versatile career stories highlighting leadership, ownership, and resilience", topics: ["STAR Story Matrix", "Quantifying Impact", "Ownership Mindset"] },
              { title: "Conflict Resolution & Architectural Debates", description: "Navigating team disagreements, disagree-and-commit, advocating for technical debt remediation", topics: ["Disagree and Commit", "Technical Trade-Offs", "Influence Without Authority"] },
              { title: "Compensation Strategy & Negotiation", description: "Understanding equity vesting (cliff, backloaded), 83(b) elections, competing offers, counter-negotiations", topics: ["RSU vs ISO Equity", "Competing Offers Leverage", "Total Comp Optimization"] }
            ],
            labProject: "Build a complete 15-story STAR Behavioral Playbook and undergo a recorded 60-minute Bar Raiser panel simulation.",
            textbooks: [
              { title: "Never Split the Difference", author: "Chris Voss", type: "book" }
            ]
          }
        ]
      },
      {
        semesterNumber: 8,
        termTitle: "Semester 8: The Placement Drive, Senior Thesis & Tech Launch",
        theme: "Corporate Placement, Thesis Defense & Induction into the Alumni Fellowship",
        description: "The culmination of your 4-year journey: on-campus recruiting rounds, final placement offer acceptance, senior thesis defense, and induction into the AlgoGenius Alumni Network.",
        totalCredits: 20,
        courses: [
          {
            id: "plc401",
            code: "PLC-401",
            title: "AlgoGenius Corporate Placement Drive & On-Campus Recruiting",
            credits: 8,
            category: "career",
            weeklyHours: 12,
            overview: "Direct participation in on-campus interviews with Tier-1 Tech Giants (Google, Meta, Apple, Microsoft, Amazon), Frontier AI Labs (OpenAI, Anthropic, DeepMind), Autonomous Vehicle Leaders (Tesla, Waymo), and Quantitative Hedge Funds (Jane Street, Citadel).",
            keyOutcomes: [
              "Participate in fast-track on-campus technical screening and onsite final interview loops",
              "Receive personalized strategic guidance from the Placement Cell for each specific corporate round",
              "Secure full-time employment offers or prestigious graduate research fellowships prior to commencement"
            ],
            modules: [
              { title: "On-Campus Recruitment Cycles", description: "Day 0 & Day 1 recruitment schedules, fast-track partner referrals, batch assessments", topics: ["Recruitment Timelines", "Partner Fast-Tracks", "Superday Preparation"] },
              { title: "Debriefs & Rapid Interview Iteration", description: "Same-day post-interview analysis, identifying knowledge gaps, refining responses between rounds", topics: ["Post-Interview Audits", "Targeted Gap Closure", "Maintaining Peak Mental State"] },
              { title: "Offer Acceptance & Transition Planning", description: "Offer comparison analysis, relocation considerations, team matching conversations", topics: ["Team Matching Interviews", "Offer Acceptance Ethics", "Relocation Logistics"] }
            ],
            labProject: "Finalize and execute your full-time tech offer or graduate research fellowship placement contract.",
            textbooks: [
              { title: "The Software Engineer's Guidebook", author: "Gergely Orosz", type: "book" }
            ]
          },
          {
            id: "the401",
            code: "THE-401",
            title: "Senior AI Research Thesis & Public Oral Defense",
            credits: 8,
            category: "capstone",
            weeklyHours: 10,
            overview: "Individual senior thesis representing original empirical research, algorithmic novelty, or scalable systems architecture in artificial intelligence, defended before an academic and industrial panel.",
            keyOutcomes: [
              "Author a comprehensive 30+ page senior thesis conforming to IEEE/ACM formatting standards",
              "Present a 20-minute public oral thesis defense and address technical questions from the committee",
              "Archive all source code, datasets, and pretrained model weights in open-access reproducibility repositories"
            ],
            modules: [
              { title: "Manuscript Composition & Peer Review", description: "Rigorous scientific narrative, mathematical proofs, experimental replication, ablation tables", topics: ["Thesis Composition", "Ablation Matrices", "Reproducibility Standards"] },
              { title: "Thesis Defense Preparation", description: "Slide deck orchestration, timing, anticipating committee critiques, theoretical defenses", topics: ["Defense Rehearsals", "Anticipating Objections", "Visual Rigor"] },
              { title: "Open-Access Archival", description: "Zenodo DOI generation, Hugging Face model cards, Docker reproducibility environments", topics: ["Hugging Face Model Cards", "Zenodo DOIs", "Code Open-Sourcing"] }
            ],
            labProject: "Submit and publicly defend your Senior AI Thesis, earning faculty commendation and graduation honors.",
            textbooks: [
              { title: "A Manual for Writers of Research Papers, Theses, and Dissertations", author: "Kate L. Turabian", type: "book" }
            ]
          },
          {
            id: "alu401",
            code: "ALU-401",
            title: "AlgoGenius Alumni Fellowship & Lifelong Mentorship Induction",
            credits: 4,
            category: "career",
            weeklyHours: 4,
            overview: "Induction into the global AlgoGenius Alumni Network spanning Silicon Valley, Seattle, New York, London, Zurich, Tokyo, and Singapore. Transitioning from student to mentor and industry trailblazer.",
            keyOutcomes: [
              "Join active regional AlgoGenius alumni chapters and special interest groups (AI Research, Startups, Quant)",
              "Commit to mentoring future incoming freshman classes through the AlgoGenius Buddy Initiative",
              "Access lifelong career transition support, venture capital connections, and alumni-exclusive research symposiums"
            ],
            modules: [
              { title: "Global Chapter Integration", description: "Regional networking directories, alumni Slack/Discord channels, annual global conferences", topics: ["Regional Chapters", "Alumni Directory", "Special Interest Groups"] },
              { title: "Venture Incubation & Angel Ecosystem", description: "AlgoGenius Venture Fund, founder matching, incubator fast-tracks for alumni startups", topics: ["Founder Incubation", "Angel Syndicates", "IP Licensing"] },
              { title: "The Mentor's Pledge", description: "Giving back: guest lecturing, hosting campus recruitment sessions, reviewing student capstones", topics: ["Giving Back", "Alumni Lecturing", "Sustaining Excellence"] }
            ],
            labProject: "Participate in the Commencement Gala and establish your official profile in the Global AlgoGenius Alumni Directory.",
            textbooks: [
              { title: "Give and Take", author: "Adam Grant", type: "book" }
            ]
          }
        ]
      }
    ]
  }
];

export const CAPSTONE_SHOWCASE_PROJECTS: CapstoneProject[] = [
  {
    id: "proj-1",
    title: "NeuroPath AI: Multimodal Edge Diagnostic Pathology",
    category: "Healthcare & Computer Vision",
    team: "Team Synapse (Year 3 Capstone)",
    abstract: "A low-latency multimodal foundation model running on edge TensorRT hardware that analyses gigapixel histopathological whole-slide images (WSIs) to identify oncology margins with 98.4% diagnostic concordance, reducing lab turnaround time from 72 hours to 8 minutes.",
    techStack: ["PyTorch", "TensorRT", "FastAPI", "Docker", "HuggingFace", "React"],
    demonstrationHighlights: [
      "Real-time whole-slide zoom & inference at 60 FPS",
      "Explainability heatmap visualization powered by Integrated Gradients",
      "Interactive clinician second-opinion verification workflow"
    ],
    award: "Expo 1st Place - AlgoGenius Gold Cup & $50,000 Venture Grant",
    githubStars: 1420,
    exhibitionBooth: "Booth A-12 (Medical Perception Pavillion)",
    mentor: "Dr. Elena Rostova (Staff Research Scientist, DeepMind Health)"
  },
  {
    id: "proj-2",
    title: "AegisAgent: Autonomous Multi-Modal Drone Swarm Navigation",
    category: "Robotics & Reinforcement Learning",
    team: "AeroIntelligence Lab (Year 3 Capstone)",
    abstract: "Distributed multi-agent reinforcement learning (PPO) system enabling a quadcopter swarm to autonomously navigate GPS-denied collapsed structures for emergency search-and-rescue, synchronizing point-cloud maps via spatial graph neural networks.",
    techStack: ["ROS 2", "PyTorch PPO", "Isaac Sim", "C++20", "WebRTC", "Ray"],
    demonstrationHighlights: [
      "Live hardware flight demonstration in obstacle enclosure",
      "Dynamic obstacle avoidance with sub-15ms perception-to-actuation latency",
      "Distributed 3D Gaussian Splatting environmental reconstruction"
    ],
    award: "Best Hardware & Robotics Engineering Award",
    githubStars: 890,
    exhibitionBooth: "Arena B-01 (Robotics Flight Arena)",
    mentor: "Marcus Sterling (Lead Autonomy Engineer, Tesla Optimus)"
  },
  {
    id: "proj-3",
    title: "OmniReason: Agentic Codebase Architecture & Self-Correction Engine",
    category: "Generative AI & LLMs",
    team: "Recursive Systems (Year 3 Capstone)",
    abstract: "An autonomous developer agent utilizing hierarchical tree-of-thought planning, formal program verification, and isolated Docker execution sandboxes to debug, refactor, and verify large multi-language enterprise codebases with zero hallucinations.",
    techStack: ["vLLM", "Llama 3 Fine-Tune", "LangGraph", "Docker API", "Python AST", "TypeScript"],
    demonstrationHighlights: [
      "Autonomous resolution of real-world GitHub issues with zero human intervention",
      "Live automated generation of unit test suites with 100% boundary coverage",
      "Interactive code flow dependency graph rendering"
    ],
    award: "Silicon Valley Venture Jury Prize",
    githubStars: 2150,
    exhibitionBooth: "Booth C-04 (Software Agents Hall)",
    mentor: "Sarah Chen (Director of AI, OpenAI Platform)"
  },
  {
    id: "proj-4",
    title: "ChronoQuant: Low-Latency High-Frequency Algorithmic Execution System",
    category: "Fintech & Quantitative Trading",
    team: "AlphaFlow Research (Year 3 Capstone)",
    abstract: "An ultra-low-latency market microstructure forecasting engine leveraging temporal convolutional networks and kernel regression on L2/L3 order book tick data, deployed on customized FPGA and C++ high-performance execution nodes.",
    techStack: ["C++23", "CUDA", "Python", "NumPy", "Apache Kafka", "PostgreSQL"],
    demonstrationHighlights: [
      "Sub-microsecond tick-to-trade signal generation simulation",
      "Live backtesting dashboard processing 10 million order book updates per second",
      "Real-time risk governance and drawdown kill-switches"
    ],
    award: "Quantitative Finance Excellence Trophy",
    githubStars: 640,
    exhibitionBooth: "Booth D-09 (High-Frequency & Fintech Suite)",
    mentor: "David K. Zhang (Partner & Head of AI, Jane Street)"
  }
];

export const PLACEMENT_PARTNERS: PlacementPartner[] = [
  {
    name: "Google DeepMind",
    logoInitial: "G",
    hiringTier: "FAANG / Frontier Labs",
    rolesHired: ["Research Scientist (AI)", "Machine Learning Engineer", "Systems Architect"],
    avgPackage: "$240,000 - $380,000",
    interviewFormat: ["Online Coding (Hard DP/Graphs)", "ML Theory Whiteboard", "Large-Scale Systems Design", "Googliness & Leadership"],
    topDomains: ["Transformers", "Multimodal Models", "Reinforcement Learning", "Distributed Training"]
  },
  {
    name: "OpenAI",
    logoInitial: "O",
    hiringTier: "FAANG / Frontier Labs",
    rolesHired: ["Member of Technical Staff", "Inference Optimization Engineer", "Alignment Researcher"],
    avgPackage: "$310,000 - $490,000",
    interviewFormat: ["Deep Learning Fundamentals", "Live PyTorch Coding", "Inference Infrastructure Design", "Culture & Safety Bar"],
    topDomains: ["Kernel Optimization (Triton)", "Distributed Systems", "Post-Training Alignment", "Agents"]
  },
  {
    name: "NVIDIA",
    logoInitial: "N",
    hiringTier: "FAANG / Frontier Labs",
    rolesHired: ["Deep Learning Performance Engineer", "CUDA Systems Developer", "Autonomous Vehicles Engineer"],
    avgPackage: "$225,000 - $350,000",
    interviewFormat: ["C++/CUDA Programming", "Computer Architecture & Memory", "TensorRT Optimization", "Technical Deep Dive"],
    topDomains: ["GPU Hardware Acceleration", "TensorRT", "NeMo Framework", "Robotics Simulation"]
  },
  {
    name: "Meta AI (FAIR)",
    logoInitial: "M",
    hiringTier: "FAANG / Frontier Labs",
    rolesHired: ["Research Engineer (Llama)", "Computer Vision Scientist", "ML Infrastructure Lead"],
    avgPackage: "$235,000 - $365,000",
    interviewFormat: ["2x Algorithmic Coding", "Machine Learning System Design", "Past Project Deep Dive", "Behavioral Leadership"],
    topDomains: ["Open-Source Foundation Models", "PyTorch Core", "Recommendation Engines", "AR/VR Perception"]
  },
  {
    name: "Tesla Autopilot",
    logoInitial: "T",
    hiringTier: "Autonomous Tech & Robotics",
    rolesHired: ["Autopilot Software Engineer", "Perception ML Engineer", "Optimus Robotics AI Scientist"],
    avgPackage: "$210,000 - $340,000",
    interviewFormat: ["Real-Time C++ Systems", "Computer Vision & Occupancy Networks", "Hardware Constraints", "Extreme Ownership"],
    topDomains: ["Vision-Only Autonomy", "End-to-End Neural Control", "Edge Compute", "Robotics Kinematics"]
  },
  {
    name: "Jane Street / Citadel",
    logoInitial: "J",
    hiringTier: "Quant & Fintech",
    rolesHired: ["Quantitative Researcher", "Machine Learning Alpha Modeler", "Low-Latency Core Engineer"],
    avgPackage: "$350,000 - $550,000+",
    interviewFormat: ["Probability & Expected Value Puzzles", "High-Performance Algorithms", "Mental Math & Data Modeling", "Onsite Superday"],
    topDomains: ["Stochastic Modeling", "Time Series Forecasting", "Ultra-Low-Latency Systems", "Game Theory"]
  },
  {
    name: "Microsoft Research",
    logoInitial: "MS",
    hiringTier: "AI Enterprise & Cloud",
    rolesHired: ["Applied AI Scientist", "Azure AI Platform Engineer", "NLP Research Fellow"],
    avgPackage: "$215,000 - $320,000",
    interviewFormat: ["Algorithmic Problem Solving", "Cloud System Architecture", "Data Structures", "Collaborative Interview"],
    topDomains: ["Enterprise Copilots", "Distributed Cloud Compute", "Healthcare AI", "Cognitive Services"]
  },
  {
    name: "Anthropic",
    logoInitial: "A",
    hiringTier: "FAANG / Frontier Labs",
    rolesHired: ["Interpretability Researcher", "Full-Stack AI Engineer", "Safety Systems Engineer"],
    avgPackage: "$280,000 - $440,000",
    interviewFormat: ["Mechanistic Interpretability", "Python/Rust Systems", "LLM Evaluation Frameworks", "Safety Alignment"],
    topDomains: ["Constitutional AI", "Mechanistic Interpretability", "Agent Safety", "Cluster Scaling"]
  }
];

export const MOCK_INTERVIEW_QUESTIONS: InterviewQuestion[] = [
  {
    id: "q-1",
    type: "ml_system_design",
    difficulty: "Staff Level",
    question: "Design a Real-Time Recommendation System for YouTube serving 2 Billion Users.",
    context: "Asked frequently at Google, Meta, and Netflix for Senior Machine Learning Engineer and Staff AI roles.",
    keyConcepts: [
      "Two-Stage Architecture: Candidate Generation (Nomination) + Heavy Ranking",
      "Two-Tower Neural Networks for Approximate Nearest Neighbor (ANN) search",
      "Real-time feedback loop incorporating user freshness, dislikes, and skip signals",
      "Multi-gate Mixture-of-Experts (MMoE) for multi-objective optimization (watch time, CTR, shares)"
    ],
    solutionBreakdown: "1. Clarify Scale & Constraints: 2B users, 500 hours uploaded/minute, p99 latency < 50ms.\n2. High-Level Flow: Fast Candidate Generation reduces 1B videos to 1,000 using Two-Tower vector dot-products indexed via ScaNN/HNSW. \n3. Deep Ranking: A feature-rich MMoE neural network scores the top 1,000 candidates with hundreds of dense and sparse features (user watch history, query embeddings, channel affinity). \n4. Re-Ranking & Diversity: De-biasing position bias, applying diversity filters, deduplication, and regulatory policy guardrails.",
    codeSnippet: "# Conceptual Two-Tower Vector Dot-Product Scoring\nclass TwoTowerMatcher(nn.Module):\n    def __init__(self, user_encoder, item_encoder):\n        super().__init__()\n        self.user_encoder = user_encoder\n        self.item_encoder = item_encoder\n        \n    def forward(self, user_features, candidate_features):\n        u_emb = F.normalize(self.user_encoder(user_features), p=2, dim=-1)\n        v_emb = F.normalize(self.item_encoder(candidate_features), p=2, dim=-1)\n        # Cosine similarity logits with temperature\n        return torch.matmul(u_emb, v_emb.T) / 0.07"
  },
  {
    id: "q-2",
    type: "algorithm",
    difficulty: "Hard",
    question: "Implement an LRU Cache with O(1) Get and O(1) Put operations from scratch.",
    context: "Foundational data structures interview challenge asked across Apple, Google, Microsoft, and Amazon.",
    keyConcepts: [
      "Doubly Linked List for O(1) node deletion and insertion at the head",
      "Hash Map (dict) mapping keys directly to Doubly Linked List Node pointers",
      "Edge cases: Updating existing key, exceeding capacity, single-node capacity"
    ],
    solutionBreakdown: "Combine a Hash Map with a Doubly Linked List. The hash map stores key -> Node references for instant lookup. The doubly linked list maintains access order with dummy Head and Tail sentinel nodes, eliminating boundary null checks. When accessed via get(), disconnect node and prepend to head. When put() exceeds capacity, remove node directly preceding tail.",
    codeSnippet: "class Node:\n    def __init__(self, key=0, val=0):\n        self.key, self.val = key, val\n        self.prev, self.next = None, None\n\nclass LRUCache:\n    def __init__(self, capacity: int):\n        self.cap, self.map = capacity, {}\n        self.head, self.tail = Node(), Node()\n        self.head.next, self.tail.prev = self.tail, self.head\n        \n    def _remove(self, node):\n        node.prev.next = node.next\n        node.next.prev = node.prev\n        \n    def _add_to_front(self, node):\n        node.next = self.head.next\n        node.prev = self.head\n        self.head.next.prev = node\n        self.head.next = node\n        \n    def get(self, key: int) -> int:\n        if key not in self.map:\n            return -1\n        node = self.map[key]\n        self._remove(node)\n        self._add_to_front(node)\n        return node.val\n        \n    def put(self, key: int, value: int) -> None:\n        if key in self.map:\n            self._remove(self.map[key])\n        node = Node(key, value)\n        self.map[key] = node\n        self._add_to_front(node)\n        if len(self.map) > self.cap:\n            lru = self.tail.prev\n            self._remove(lru)\n            del self.map[lru.key]"
  },
  {
    id: "q-3",
    type: "ml_theory",
    difficulty: "Medium",
    question: "Why do we scale the dot product by 1 / sqrt(d_k) in Scaled Dot-Product Attention?",
    context: "Crucial deep learning theoretical interview question testing comprehension of the original Transformer architecture.",
    keyConcepts: [
      "Variance of the sum of independent random variables",
      "Vanishing gradients in the Softmax function under large input magnitudes",
      "Mathematical expectation and variance derivations"
    ],
    solutionBreakdown: "Assume query components q_i and key components k_i are independent random variables with mean 0 and variance 1. The dot product q · k = sum(q_i * k_i) has mean 0, but its variance is d_k (the sum of d_k independent unit variances). \nAs d_k grows large (e.g. d_k = 64 or 128), the magnitude of the dot products can grow proportionally to sqrt(d_k). \nLarge magnitude logits push the Softmax function into saturation regions where its derivative approaches zero (vanishing gradient). \nDividing by sqrt(d_k) normalizes the dot product to have unit variance (variance = 1), preserving stable gradient flow during backpropagation.",
    codeSnippet: "# Softmax saturation demonstration\nimport torch\nimport torch.nn.functional as F\n\nd_k = 128\nq = torch.randn(1, 10, d_k)\nk = torch.randn(1, 10, d_k)\n\nunscaled_scores = torch.matmul(q, k.transpose(-2, -1))\nscaled_scores = unscaled_scores / (d_k ** 0.5)\n\nprint('Unscaled Variance:', unscaled_scores.var().item()) # ~128.0\nprint('Scaled Variance:', scaled_scores.var().item())     # ~1.0"
  },
  {
    id: "q-4",
    type: "behavioral",
    difficulty: "Hard",
    question: "Tell me about a time you strongly disagreed with a senior engineering decision and how you handled it.",
    context: "Universal behavioral question testing Amazon's 'Have Backbone; Disagree and Commit' and Google's collaborative conflict resolution.",
    keyConcepts: [
      "STAR framework structure (Situation, Task, Action, Result)",
      "Grounding disagreements in empirical data and benchmarks, never personal opinion",
      "Commitment to the final team decision once consensus is established"
    ],
    solutionBreakdown: "Structure:\n- Situation: During our Year 3 capstone project, our tech lead wanted to use a monolithic LLM API for our real-time edge medical diagnostic pipeline.\n- Task: I recognized that client latency requirements (< 100ms) and HIPAA data privacy constraints made external API calls unfeasible.\n- Action: Rather than arguing subjectively, I constructed an empirical benchmark comparing an optimized local quantized model (TensorRT INT8) versus the external API over 1,000 simulated hospital network calls, measuring latency spikes, packet loss, and cost.\n- Result: Presented the empirical matrix at our sprint review. The team unanimously adopted the local edge model, achieving 22ms latency and saving $14,000 in monthly API tokens, while fully preserving on-prem patient privacy.",
    codeSnippet: undefined
  }
];

export const CURATED_RESOURCES: ResourceItem[] = [
  {
    id: "res-1",
    title: "Attention Is All You Need (Vaswani et al.)",
    category: "Foundational Papers",
    targetYear: 3,
    description: "The seminal 2017 paper introducing the Transformer architecture, replacing recurrent and convolutional layers with multi-head self-attention.",
    authorOrInstitution: "Google Research & Google Brain",
    linkText: "Read Paper on arXiv",
    tag: "Core Transformer"
  },
  {
    id: "res-2",
    title: "Deep Residual Learning for Image Recognition (ResNet)",
    category: "Foundational Papers",
    targetYear: 2,
    description: "Introduced skip connections to train ultra-deep neural networks (152+ layers) without gradient degradation, revolutionizing computer vision.",
    authorOrInstitution: "Kaiming He, Xiangyu Zhang, Shaoqing Ren, Jian Sun",
    linkText: "Read Paper on arXiv",
    tag: "Computer Vision"
  },
  {
    id: "res-3",
    title: "CS229: Machine Learning (Stanford University)",
    category: "University Lecture Series",
    targetYear: 2,
    description: "Professor Andrew Ng's world-famous graduate-level lecture series covering supervised learning, learning theory, and reinforcement learning with rigorous derivations.",
    authorOrInstitution: "Stanford University",
    linkText: "Watch Course Lectures",
    tag: "Stanford CS229"
  },
  {
    id: "res-4",
    title: "MIT 6.006: Introduction to Algorithms",
    category: "University Lecture Series",
    targetYear: 2,
    description: "Legendary lecture series by Erik Demaine and Srini Devadas covering data structures, dynamic programming, graph algorithms, and complexity bounds.",
    authorOrInstitution: "Massachusetts Institute of Technology",
    linkText: "Explore MIT OpenCourseWare",
    tag: "MIT 6.006"
  },
  {
    id: "res-5",
    title: "Mathematics for Machine Learning",
    category: "Textbooks & Guides",
    targetYear: 1,
    description: "The definitive mathematical guide bridging linear algebra, analytic geometry, matrix decompositions, and vector calculus directly to machine learning models.",
    authorOrInstitution: "Deisenroth, Faisal, Ong (Cambridge University Press)",
    linkText: "Free Textbook PDF",
    tag: "Freshman Math"
  },
  {
    id: "res-6",
    title: "Designing Data-Intensive Applications",
    category: "Textbooks & Guides",
    targetYear: 2,
    description: "The gold standard text on distributed storage, transactions, replication, partitioning, and batch/stream processing for modern software engineers.",
    authorOrInstitution: "Martin Kleppmann (O'Reilly Media)",
    linkText: "View Book Details",
    tag: "Systems Architecture"
  },
  {
    id: "res-7",
    title: "karpathy/micrograd & nanoGPT",
    category: "GitHub Repositories",
    targetYear: 3,
    description: "Minimalist, deeply instructive repositories by Andrej Karpathy illustrating automatic differentiation and GPT training in clean, readable Python/PyTorch.",
    authorOrInstitution: "Andrej Karpathy",
    linkText: "View on GitHub",
    tag: "PyTorch from Scratch"
  },
  {
    id: "res-8",
    title: "vLLM: Easy, Fast, and Cheap LLM Serving",
    category: "GitHub Repositories",
    targetYear: 3,
    description: "High-throughput and memory-efficient LLM serving engine featuring PagedAttention, continuous batching, and speculative decoding.",
    authorOrInstitution: "UC Berkeley LMSYS Organization",
    linkText: "Explore vLLM Repo",
    tag: "Production MLOps"
  }
];
