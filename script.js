/* ==========================================================================
   CONECTAFEIRA 2026 - LÓGICA E INTERATIVIDADE (SCRIPT.JS)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. FERRAMENTAS DE ACESSIBILIDADE
    // ==========================================
    const btnContrast = document.getElementById("btn-contrast");
    const btnIncreaseFont = document.getElementById("btn-increase-font");
    const btnDecreaseFont = document.getElementById("btn-decrease-font");
    
    let fontSizePercentage = 100;

    // Alternar Modo Escuro (Festa Noturna)
    btnContrast.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // Aumentar Fonte
    btnIncreaseFont.addEventListener("click", () => {
        if (fontSizePercentage < 130) {
            fontSizePercentage += 10;
            document.documentElement.style.fontSize = `${fontSizePercentage}%`;
        }
    });

    // Diminuir Fonte
    btnDecreaseFont.addEventListener("click", () => {
        if (fontSizePercentage > 80) {
            fontSizePercentage -= 10;
            document.documentElement.style.fontSize = `${fontSizePercentage}%`;
        }
    });


    // ==========================================
    // 2. SEÇÃO 1: BARRACA INTERATIVA (A JORNADA DO CAMPEÃO)
    // ==========================================
    const foodCards = document.querySelectorAll(".food-card");
    const detailsPanel = document.getElementById("food-details-panel");
    const panelTitle = document.getElementById("panel-title");
    const panelDescription = document.getElementById("panel-description");
    const panelDistance = document.getElementById("panel-distance");
    const panelTime = document.getElementById("panel-time");

    // Dados dos alimentos simulando uma "escalação" vinda do campo
    const foodData = {
        tomate: {
            titulo: "🍅 Tomate Craque de Bola",
            descricao: "Cultivado por agricultura familiar com sistemas de irrigação inteligente. Ele sai do campo festejando e chega fresquinho para abastecer as feiras e mercados da cidade!",
            distancia: "120 km",
            tempo: "2 horas de viagem"
        },
        leite: {
            titulo: "🥛 Leite Camisa 10",
            descricao: "Produzido em propriedades leiteiras modernas que usam tecnologia para garantir o bem-estar animal. Viaja em caminhões resfriados (verdadeiros tanques táticos) para garantir a energia do trabalhador urbano.",
            distancia: "85 km",
            tempo: "1 hora e 30 min"
        },
        alface: {
            titulo: "🥬 Alface Orgânica Invicta",
            descricao: "Livre de agrotóxicos, essa alface representa a zaga da nossa saúde! É colhida de madrugada no cinturão verde rural e chega logo cedo na mesa da torcida da cidade.",
            distancia: "45 km",
            tempo: "50 minutos"
        }
    };

    foodCards.forEach(card => {
        card.addEventListener("click", () => {
            const foodKey = card.getAttribute("data-food");
            const data = foodData[foodKey];

            if (data) {
                // Atualiza o painel com os dados
                panelTitle.innerText = data.titulo;
                panelDescription.innerText = data.descricao;
                panelDistance.innerText = data.distancia;
                panelTime.innerText = data.tempo;

                // Mostra o painel removendo a classe 'hidden'
                detailsPanel.classList.remove("hidden");
                
                // Efeito visual de foco/seleção (feedback para o usuário)
                detailsPanel.style.animation = "none";
                setTimeout(() => {
                    detailsPanel.style.animation = "pulse 0.5s ease-in-out";
                }, 10);
            }
        });
    });


    // ==========================================
    // 3. SEÇÃO 2: CALCULADORA MEU PRATO SUSTENTÁVEL (ARENA DE IMPACTO)
    // ==========================================
    const btnCalculate = document.getElementById("btn-calculate");
    const calcResult = document.getElementById("calc-result");
    const resWater = document.getElementById("res-water");
    const resSeeds = document.getElementById("res-seeds");

    btnCalculate.addEventListener("click", () => {
        const base = document.getElementById("select-base").value;
        const protein = document.getElementById("select-protein").value;

        let waterTotal = 0;
        let seedsTotal = 0;

        // Lógica de cálculo baseada nas escolhas (Simulação pedagógica)
        if (base === "arroz-feijao") {
            waterTotal += 250;
            seedsTotal += 40;
        } else if (base === "massa") {
            waterTotal += 180;
            seedsTotal += 30;
        }

        if (protein === "carne") {
            waterTotal += 1500; // Carne exige muito mais recursos hídricos
            seedsTotal += 150;  // Grãos para o trato do gado
        } else if (protein === "frango") {
            waterTotal += 600;
            seedsTotal += 80;
        } else if (protein === "ovo") {
            waterTotal += 200;
            seedsTotal += 20;
        }

        // Exibe os resultados na tela de forma animada
        resWater.innerText = waterTotal.toLocaleString('pt-BR');
        resSeeds.innerText = seedsTotal.toLocaleString('pt-BR');
        
        calcResult.classList.remove("hidden");
    });


    // ==========================================
    // 4. SEÇÃO 3: QUIZ CONEXÃO PREMIADA (DECISÃO NOS PÊNALTIS)
    // ==========================================
    const btnSubmitQuiz = document.getElementById("btn-submit-quiz");
    const quizFeedback = document.getElementById("quiz-feedback");

    btnSubmitQuiz.addEventListener("click", () => {
        // Seleciona a opção de rádio que o usuário marcou
        const selectedOption = document.querySelector('input[name="quiz-q1"]:checked');

        if (!selectedOption) {
            quizFeedback.innerText = "⚠️ Alerta do Juiz: Escolha uma resposta antes de chutar para o gol!";
            quizFeedback.className = "feedback-text incorrect";
            quizFeedback.classList.remove("hidden");
            return;
        }

        if (selectedOption.value === "B") {
            // Resposta Correta
            quizFeedback.innerHTML = "⚽ GOOOOL DO BRASIL! Resposta exata! Os aplicativos conectam diretamente quem produz a quem consome na cidade, reduzindo custos e festejando a tecnologia no campo!";
            quizFeedback.className = "feedback-text correct";
        } else {
            // Resposta Incorreta
            quizFeedback.innerHTML = "❌ NA TRAVE! Essa não é a melhor tática. Tente novamente! O uso correto da tecnologia digital encurta as distâncias de mercado.";
            quizFeedback.className = "feedback-text incorrect";
        }

        quizFeedback.classList.remove("hidden");
    });
});
