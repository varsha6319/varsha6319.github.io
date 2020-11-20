/*Research Details Table*/

const researchTable = document.querySelector(".main");
const citeTable1 = document.querySelector(".citeT1");
const citeTable2 = document.querySelector(".citeT2");
const citeTable3 = document.querySelector(".citeT3");

const research = [
    {
        title : "Cross Audio-Visual Recognition – Lip Reading",
        authors : "Varsha C Bendre, P. Singh, R. Anand and Mayuri .K.P ",
        conferences : "International Journals of Advanced Research in Computer Science and Software Engineering [ ISSN: 2277-128X (Volume-9, Issue-4)]",
        researchYr : 2019,
        citebox : "#popup1",
        image : "assets/images/research-page/LipReading.png",
        link : "https://nbviewer.jupyter.org/github/varsha6319/varsha6319.github.io/blob/master/assets/docs/LipReading.pdf"
    },

    {
        title : "Artificial Intelligence Based Chatbot using Sequence-to-Sequence Model",
        authors : "Varsha. C. Bendre and Dr. Savita Choudhary ",
        conferences : "International Conference on Sustainable Advanced Computing",
        researchYr : 2018,
        citebox : "#popup2",
        image : "assets/images/research-page/chatbot.png",
        link : "https://nbviewer.jupyter.org/github/varsha6319/varsha6319.github.io/blob/master/assets/docs/ChatBot.pdf"
    },

    {
        title : "Blockchain with Artificial Intelligence: Future of Travel",
        authors : "Varsha C Bendre and P. Singh,",
        conferences : "International Conference on Clean Energy and Electrical Systems ( CEES 2018 )",
        researchYr : 2018,
        citebox : "#popup3",
        image : "assets/images/research-page/blockchain.png",
        link : "https://nbviewer.jupyter.org/github/varsha6319/varsha6319.github.io/blob/master/assets/docs/Blockchain.pdf"
    },
];

const cite1 = [{
    Abstract : "Lip reading is the task of decoding text from movement of a speaker’s mouth. There are two stages in the task namely the designing or learning the visual features and prediction. It learns the spatiotemporal visual features and the sequence model. The three dominant models that are being utilised to design the Lip reading is Convolution Neural Networks (CNN), LSTM’s and Reinforcement learning.",
    // bibtex : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite2 = [{
    Abstract : "The paper presents the architecture of the Chatbot using Sequence to Sequence model. The paper depicts detailed functional blocks, associated layers and software methodology adopted during the development.",
    // bibtex : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const cite3 = [{
    Abstract : "An integration of artificial intelligence with blockchain. The new travel agencies are to be registered with the government before it starts functioning. The smart contracts are made between the government and the travel agencies and between the agencies and the customers to validate the Proof-Of-Activity and Proof-Of-Delivery. The digital identification which reduces the verification of the customer every time.",
    // bibtex : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
}];

const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, link, authors, conferences, researchYr, citebox}) =>
        (output +=`
            <tr>
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class = "researchTitleName">
            <div><span class="imgResponsive"><img src="${image}" class="imgRes"></span></div>
            <a href="${link}" class="paperTitle"> ${title} </a>
            <div> ${authors} </div> <div class="rConferences"> ${conferences}
            <div class="researchY">${researchYr}</div>
            </div>

            <!--CITE BUTTON-->
            <span class = "resCite">
            <a href="${citebox}" class="button button-accent button-small">Abstract</a>
            </span>
            </td>

            <td class="researchCite">
            <!--CITE BUTTON-->
            <a href="${citebox}" class="button button-accent button-small">Abstract</a>
            </td>
            </tr>

            `)
        );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

const citeData1 = () => {
    let output = "";
    cite1.forEach(
        ({Abstract}) =>
        (output += `
        <tr> <td class="left-cell"> Abstract </td> <td class="right-cell">${Abstract} </td></tr>

        `)
    );
    citeTable1.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData1);

const citeData2 = () => {
    let output = "";
    cite2.forEach(
        ({Abstract}) =>
        (output += `
        <tr> <td class="left-cell"> Abstract </td> <td class="right-cell">${Abstract} </td></tr>
        `)
    );
    citeTable2.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData2);

const citeData3 = () => {
    let output = "";
    cite3.forEach(
        ({Abstract}) =>
        (output += `
        <tr> <td class="left-cell"> Abstract </td> <td class="right-cell">${Abstract} </td></tr>
        `)
    );
    citeTable3.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData3);
