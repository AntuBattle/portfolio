function Experience(){

    return(
        <div className="space-y-6">
                <div className="cyber-card p-6">
                  <h3 className="text-xl font-semibold mb-1">IDS Development for Industrial Systems</h3>
                  <p className="text-muted-foreground mb-4">Università degli Studi di Messina | 12/2024 - Present</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                    Developed, together with a team at the University of Messina, an Intrusion Detection System that analyzes hardware fingerprints of devices, with a current accuracy of 93% and a recall of 98%, available on GitHub
                    </li>
                    <li>Currently developing machine learning models for assessing and fixing ModBus/TCP and CanBus Protocol vulnerabilities</li>
                    <li>Developed a ModBus/TCP comprehensive dataset for signal analysis available on GitHub</li>
                  </ul>
                </div>

                <div className="cyber-card p-6">
                  <h3 className="text-xl font-semibold mb-1">Dashboard Designer and Developer - Zancle E-Drive Forumla SAE Team</h3>
                  <p className="text-muted-foreground mb-4">Università degli Studi di Messina | 05/2024 - 09/2024</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Designed the UI and the firmware for the STM32 dashboard that is now utilized in
the university's official Formula SAE team’s car
</li>
                    <li>Performed malware analysis and reverse engineering</li>
                    <li>Assisted in incident response and forensic investigations</li>
                    <li>Contributed to the development of security automation scripts</li>
                  </ul>
                </div>

                <div className="cyber-card p-6">
                    <h3 className="text-xl font-semibold mb-1">LLM Training and Fine-Tuning - SanTO Project</h3>
                    <p className="text-muted-foreground mb-4">Shibaura Institute of Technology, Tokyo | 10/2023 - 02/2024</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Designed a framework in Python to extract and manipulate data using pandas</li>
                        <li>Trained and Fine-Tuned a Large Language Model to implement into SanTO functionalities.</li>
                        <li>Greatly Improved the SanTO project robot capabilites (polls from users report up to 80%) to answer questions and provide advice.</li>
                    </ul>
                </div>
              </div>
    )
}

export default Experience