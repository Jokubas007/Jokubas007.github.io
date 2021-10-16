const hpTabs = [
  {
    "heading": "Discussion about flavonoid synthesis and protein modeling with dr. Kliment Olechnovič",
    "squad": "Dry lab",
    "stakeholder": "Academia",
    "month": "April",
    "line_number": 1,
    "label": "Discussion about flavonoid synthesis and protein modeling with dr. Kliment Olechnovič",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Kliment Olechnovič is Senior Research Fellow at Vilnius University Life Sciences Center Institute of Biotechnology. We approached him to get an insight about the first steps of fusion protein modeling.</p><h3>Contribution</h3><p>Since the linked protein design field is well-developed, the scientist shared recent reliable publications about it to develop our design methodologies. K. Olechnovič told us that the first step should be to analyze the proteins intended to be fused and the linker.</p><h3>Adjustments</h3><p>After consultation, we continued with the development of idea and  research of synthesis of flavonoids. We analyzed the suggested literature, which helped us form the initial flow - the direction in which we should move on to develop the modeling part related to the flavonoid synthesis. </p><h3>Our next steps</h3><p>  Choose the proteins to link and which linkers to include. </p> <img src=\"https://2021.igem.org/wiki/images/1/15/T--Vilnius-Lithuania--Biomatter_Designs_consultation.png\"/>"
  },
  {
    "heading": "Consultation about aptamer-protein  docking programs with V. Kairys",
    "squad": "Dry lab",
    "stakeholder": "Academia",
    "month": "May",
    "line_number": 2,
    "label": "Consultation about aptamer-protein  docking programs with V. Kairys",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Visvaldas Kairys is a Senior Research Fellow at Vilnius University Life Sciences Center Institute of Biotechnology and University of Madeira, to get answers to our questions related to DNA aptamer - protein interaction modeling. Visvaldas Kairys works in the field of computational chemistry and has experience with molecular docking, which is exactly the field in which our team is researching. Since part of the project in the wet lab will involve aptamer interaction with proteins, we decided it would be sensible to simulate interactions of our compounds <i>in silico</i>. After theoretical analysis of existing software tools, we constructed a theoretical modeling workflow. Some parts of the workflow raised technical questions. Therefore we looked for experienced researchers in this field to consult us. </p><h3>Contribution</h3><p>The consulting researcher pointed out that the problem, which we analyze, is not straightforward, and it is indeed difficult to come up with accurate results. However, he approved our choice of tools and encouraged us to try and explore the field.</p><h3>Adjustments</h3><p> V. Kairys approved our thinking workflow. He encouraged us to reach out to other bioinformaticians (J. Dapkūnas) to get deeper insights about aptamer - protein complex affinity scoring.</p><h3>Our next steps</h3><p>We decided to contact J. Dapkūnas and ask for a consultation about how to make aptamer-protein complex scoring more accurate, neural network applications and technical resources that might be needed for modeling. </p>"
  },
  {
    "heading": "Review of aptamer-docking  interaction modeling with J. Dapkūnas",
    "squad": "Dry lab",
    "stakeholder": "Academia",
    "month": "May",
    "line_number": 3,
    "label": "Review of aptamer-docking  interaction modeling with J. Dapkūnas",
    "tooltip": "More scorings of aptamer-protein complexes included",
    "description": "<h3>Description</h3><p>Justas Dapkūnas, Ph.D, is a researcher at the Department of Bioinformatics of Vilnius University Institute of Biotechnology.  We needed to verify our modeling flow and get deeper insights about aptamer-protein complex scoring functions.</p><h3>Contribution</h3><p>He reviewed our modeling workflow and confirmed that it is logical, and provided suggestions to get more accurate results from our modeling part. Bioinformatician suggested looking for existing homologs of our proteins that might have their complexes with DNA  structures determined experimentally. Also, he suggested running docking on several different programs to get several scores and rankings of the complexes.</p><h3>Adjustments</h3><p>We decided to check whether homologs  of our proteins that have DNA in their structures exist and to look for more scoring functions.</p><h3>Our next steps</h3><p>We will analyse other protein-DNA docking programs like HADDOCK and look for more scoring functions that could provide alternative evaluation for our complexes.  Since molecular dynamics might also provide a way to evaluate complexes, therefore we will try to reach out to people who have experience in this field.</p><h3>Main changes</h3><p>More scorings of aptamer-protein complexes included</p>"
  },
  {
    "heading": "Rectifying protein modeling with Laurynas Karpus",
    "squad": "Dry lab",
    "stakeholder": "Practitioners",
    "month": "July",
    "line_number": 4,
    "label": "Rectifying protein modeling with Laurynas Karpus",
    "tooltip": null,
    "description": "<h3>Description</h3><p>We contacted Laurynas Karpus, who is a CEO of Lithuanian start-up “Biomatter Designs” and a member of Vilnius - Lithuania iGEM 2017 and  2018 teams.  His company focuses on de novo protein design using synthetic biology methods and artificial intelligence technology. Therefore we wanted to receive feedback on our protein modelling.</p><h3>Contribution</h3><p>L. Karpus and his colleague I. Rokaitis delved into the idea of our project prevention part and gave comments about how we could improve our modeling flow; thus it would be more accurate.</p><h3>Adjustments</h3><p>Include more scoring functions to evaluate modeled structures and try running our chosen programs with multiple sequence alignment (MSA) included.</p><h3>Our next steps</h3><p>Apply the adjustments that the consulting specialists suggested.  Contact Gustautas Snarskis to organize a consultation about molecular dynamics simulations.</p>"
  },
  {
    "heading": "Solving inaccuracies in  fusion protein modeling with K. Olechnovič",
    "squad": "Dry lab",
    "stakeholder": "Academia",
    "month": "July",
    "line_number": 5,
    "label": "Solving inaccuracies in  fusion protein modeling with K. Olechnovič",
    "tooltip": "MSA modeling approach introduced to our flow",
    "description": "<h3>Description</h3><p>Since we faced problems with <i>ab initio</i> modeling, more precisely, multiple sequence alignment that is needed to provide for RoseTTAFold and trRosetta modeling programs for them to generate more accurate protein structures, especially the regions between them, where the contact of the fusion proteins is probable. These questions we have investigated during the meeting</p><h3>Contribution</h3><p>The researcher provided insight into how multiple sequence alignment should be generated, what kind of rules are applied, and what are the best practices.  K. Olechnovič suggested including protein docking into our modeling workflow and filtering the structures that are unlikely considering our linker situation. In other words, to keep in mind the distance that the linker takes up.  He also shared a recently published article that combined both docking and MSA modeling approaches that were attempted to apply to the modeling of protein structures. </p><h3>Adjustments</h3><p>Keeping in mind the observations that the bioinformatician  emphasized and the limited time resources,  we considered to include a docking strategy for  short linker (3-5 amino acids) cases and MSA  for long (10-15 amino acids) linker cases.</p><h3>Our next steps</h3><p>Apply the suggested adjustments and compare original results with the new ones.</p><h3>Main changes</h3><p>MSA modeling approach introduced to our flow</p>"
  },
  {
    "heading": "Consulting molecular dynamics with G. Snarskis",
    "squad": "Dry lab",
    "stakeholder": "Practitioners",
    "month": "July",
    "line_number": 6,
    "label": "Consulting molecular dynamics with G. Snarskis",
    "tooltip": null,
    "description": "<h3>Description</h3><p>We took L. Karpus’ advice to contact Gustautas Snarskis, who works with molecular dynamics simulations at Biomatter Designs, to consult us on molecular dynamics modeling flow.</p><h3>Contribution</h3><p>The specialist answered all the questions related to molecular dynamics flow: choosing the force-field, water molecule model, what are the most important aspects to take into account when simulating the environment, how long the simulations should last, how to determine whether the model has reached a local or a global minimum and what computational resources are needed to simulate our system.</p><h3>Adjustments</h3><p>Based on G. Snarskis’ tips, we will adjust our molecular dynamics flow to make our simulations more accurate, real-like fusion protein structures. </p><h3>Our next steps</h3><p>Define the main purpose of molecular dynamics simulation, adjust commands and .mdp files, and request computational resources in the Life Sciences Center.</p>"
  },
  {
    "heading": "Consultation about the protein molecular dynamics with K. Olechnovič",
    "squad": "Dry lab",
    "stakeholder": "Academia",
    "month": "July",
    "line_number": 7,
    "label": "Consultation about the protein molecular dynamics with K. Olechnovič",
    "tooltip": "Modeling with AlphaFold2 included",
    "description": "<h3>Description</h3><p>We reached out to structural bioinformatician to make a final decision whether it is reasonable to perform molecular dynamics simulations of the fusion protein system. What is more, on July 15th, AlphaFold2 became freely available for use, and we were considering exploiting it.</p><h3>Contribution</h3><p>The researcher shared the implementation of the tool for protein complexes. </p><h3>Adjustments</h3><p>Although AlphaFold2 requires more memory than Google Colab (platform, where AlphaFold2 for complexes was implemented) provides, we only could get two modeled structures instead of five that can be generated by the tool.  We had one more call with the researcher to ask whether two modeled structures are enough to evaluate our fusion protein system modeled with AlphaFold2. After this call, we received approval that two modeled structures are enough.</p><h3>Our next steps</h3><p>Move the next step of evaluating distances between active sites of the models.</p><h3>Main changes</h3><p>Modeling with AlphaFold2 included</p>"
  },
  {
    "heading": "Discussing our prepositions and education reform with Paulius Lukas Tamošiūnas",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "January",
    "line_number": 8,
    "label": "Discussing our prepositions and education reform with Paulius Lukas Tamošiūnas",
    "tooltip": "Focusing on formal education more",
    "description": "<h3>Description</h3><p>Dr. Paulius Lukas Tamošiūnas is a scientist at Vilnius University Institute of Biotechnology. Alongside his scientific career, he is also involved in school education, constantly working directly with teachers, creating educational material. Therefore we wanted to understand the background of the School Education program renewal, gain insights from P. L. Tamošiūnas' long-lasting experience in the education sector, and improve our prepositions for education programs.</p><h3>Contribution</h3><p>P. L. Tamošiūnas supported our ideological position. However, we should not expect any major changes to the current project in this stage of the reform.  He also suggested emphasizing one fundamental point - starting teaching molecular biology basics since grade 9 (currently, taught in 11th). Additionally, Paulius shared his experience and knowledge from inside of education system. He highlighted the importance of content for teachers and that if we are to create something new, we need to be as specific and as comprehensive as possible. Less work would be left for teachers to prepare additionally. We talked about national education system reform, plans to establish STEAM centers. </p><h3>Adjustments</h3><p>We lowered our expectations for the implementation of suggestions.  We will emphasize the importance of as early as a possible introduction to molecular biology and suggest several alternatives, how the curriculum could be modified to loosen time for our suggestion.  We strengthen our belief that there are many challenges in educating STEAM, life sciences</p><h3>Our next steps</h3><p>Search for alternatives for modifying curriculum for the earlier inclusion of molecular biology basics.  Have a team discussion on possible activities in the education field.  Update P. L. Tamošiūnas for any plans regarding school education and pass the insider information to future iGEM teams.</p><h3>Main changes</h3><p>Focusing on formal education more</p>"
  },
  {
    "heading": "Discussing our prepositions and teacher needs with Paulius Sungaila",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "January",
    "line_number": 9,
    "label": "Discussing our prepositions and teacher needs with Paulius Sungaila",
    "tooltip": null,
    "description": "<h3>Description</h3><p>As we were refining the prepositions for school education programs, we turned to Paulius Sungaila, who is considered to be one of the best biology teachers in Lithuania. Despite discussing possible improvements to the document, we also talked about biotechnology education in schools and teachers' competencies in this area. We introduced Paulius to our educational activities planned at that time. </p><h3>Contribution</h3><p>Paulius suggested elaborating on the proposal, giving more concrete examples of how biotechnology education in schools can be more integrated, as many teachers are not familiar with the latest scientific advances and would not be able to teach these topics in lessons without concrete suggestions. Regarding the lack of teacher experience in biotechnology, Paulius pointed out that we can contribute to teacher education through our educational activities. Still, a deeper analysis of life science teaching should be done before developing specific tools. As for our educational activities, Paulius was impressed with the augmented reality project and even offered to promote the project in schools. He also emphasized that explanatory texts provided with models should be as simple as possible and also that people absorb the information much better when it is explained by illustrations.</p><h3>Adjustments</h3><p>As we found out, the lack of teachers' competence in the field of biotechnology is a serious problem. Therefore we decided to elaborate more on this topic.  We considered Paulius's observations and tried to adapt science communication material for it to be clear and visually appealing</p><h3>Our next steps</h3><p>Supplement the prepositions according to Paulius’ suggestion by adding more examples.   In addition to the textual explanation of the augmented reality models in the “6th SynBio Sense” project, add illustrations to explain more complex concepts.</p>"
  },
  {
    "heading": "Discussing creating art from microorganisms with dr. Eglė Lastauskienė, dr. Renata Gudiukaitė",
    "squad": "Human practices",
    "stakeholder": "Academia",
    "month": "March",
    "line_number": 10,
    "label": "Discussing creating art from microorganisms with dr. Eglė Lastauskienė, dr. Renata Gudiukaitė",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Even before we came up with the idea of Sense lab events, we thought we would like to educate people about microorganisms and their significance for synthetic biology using art. We wanted to achieve that by drawing with microorganisms, but no team member had any experience with it yet. For this reason, we turned to two microbiologists from our institution, Renata Gudiukaite and Egle Lastauskiene.</p><h3>Contribution</h3><p>The scientists introduced us to the technical possibilities of implementing the idea, pointed out the biosafety requirements that we should pay attention to, detailed the differences between drawing with yeast and bacteria and what medium should be used for the respective microorganisms, and how to handle samples collected from the environment.  We also discussed the implementation forms of the idea: a drawing workshop, an installation in a museum, the pursuit of a record in creating the largest drawing on a petri dish. They were more interested in creating installation as seeking the record requires a lot of technical preparation, and drawing workshop is quite common.  The researchers also indicated which scientists we could contact for the use of specific bacteria for drawing.</p><h3>Adjustments</h3><p>Next, in the development of the installation, we decided to use the methods proposed by the scientists to ensure safety: to use super glue for the sealing of Petri dishes, not to open the dishes anymore after collecting samples from the environment. We gave up the idea of seeking the record with the largest drawing in Petri dishes as it requires too many implementation resources.</p><h3>Our next steps</h3><p>Contact the scientists who microbiologists mentioned to get more detailed information about the specific bacteria, yeasts, and medium, which they work with.</p>"
  },
  {
    "heading": "Understanding physical disability with Mindaugas",
    "squad": "Human practices",
    "stakeholder": "Public",
    "month": "April",
    "line_number": 11,
    "label": "Understanding physical disability with Mindaugas",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Mindaugas was one of the students with disabilities from Vilnius University Life Science Center with whom we reached out. As he has a physical impairment, we wanted to hear his experience studying in the Life Science Center and find out what the academic surroundings lack to make the study experience easier. Mindaugas was willing to share his thoughts, and we got to see some of the difficulties that he meets.</p><h3>Contribution</h3><p>Mindaugas pinpointed several issues that he meets while being in a wheelchair. He claimed that there is a lack of space in the laboratories, making it more complicated for him to operate there. Another problem - tables, for him a perfect option would be adjustable height tables in auditoriums. Lastly, he noted that there are still some doorsteps in the Life Science center building that make it harder to move with a wheelchair.</p><h3>Adjustments</h3><p>This consultation led to an understanding that currently, we are unable to do anything for the physically impaired in the field of education as main challenges come from poor architectural and design choices. </p><h3>Our next steps</h3><p>Narrow inclusive education focus to visually and hearing impaired audiences as well as to people that have intellectual disabilities.</p>"
  },
  {
    "heading": "Understanding learning with visual impairment with Vytautas",
    "squad": "Human practices",
    "stakeholder": "Public",
    "month": "April",
    "line_number": 12,
    "label": "Understanding learning with visual impairment with Vytautas",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Vytautas is studying informatics at Vilnius University and has a visual impairment. As synthetic biology implements IT, his experiences were relevant to us. We asked Vytautas about his current studies and the challenges that he faces. We also inquired about his experiences at school, especially during biology lessons.</p><h3>Contribution</h3><p>Vytautas mentioned that online lectures do not work so well for him as most lecturers use slides for them, and he has to review the slides after lectures. He told us that the biggest problem for the blind is visuals. It is critical to describe pictures and diagrams in an intelligible manner. Moreover, Vytautas pointed out that we should avoid PDF format when creating materials for the blind as it does not work well with screen readers. Finally, he advised us to use LaTeX software for writing the scientific data.</p><h3>Adjustments</h3><p>We identified areas where we can adjust decided to continue our project to the visually impaired. One of our focus areas will be the adaptation of our wiki page. </p><h3>Our next steps</h3><p>Create wiki page adaptations that would make it compatible with screen readers.</p>"
  },
  {
    "heading": "Understanding learning with visual impairment with Ugnė",
    "squad": "Human practices",
    "stakeholder": "Public",
    "month": "April",
    "line_number": 13,
    "label": "Understanding learning with visual impairment with Ugnė",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Ugnė is a Vilnius University alumni, currently working in the Lithuanian Library for the Blind with projects relating to the integration of the blind and has a visual impairment. We hoped she could help us gain more knowledge on how blind people learn new information without comprehending visual information. Ugnė shared her thoughts, the most memorable methods that her teachers used during lessons, and the hardships she faced while learning life sciences-related subjects.</p><h3>Contribution</h3><p>During our call, Ugnė thoroughly explained what works and what doesn't work in tactile models. She pointed out that the most important parts of the model should be enlarged, texturous and convex to be better understood. She warned us that it is more complicated to comprehend concave shapes in models.</p><h3>Adjustments</h3><p>After the consultation, we decided to keep pursuing the idea of bringing our augmented reality models to life to make the project more inclusive. </p><h3>Our next steps</h3><p>Offer partnership to LASUC (Lithuanian Center for the Development of the Blind and Visually Impaired) that would help us to create tactile models.</p>"
  },
  {
    "heading": "Getting feedback on Human Practices activities with Paulius Lukas Tamošiūnas",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "April",
    "line_number": 14,
    "label": "Getting feedback on Human Practices activities with Paulius Lukas Tamošiūnas",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Following our first productive meeting with Paulius, we were sure that we will contact him again. This time we wanted to present an overall picture of our plans for the iGEM cycle and receive some feedback and ideas for improvement</p><h3>Contribution</h3><p>Regarding the Sense Lab series, Paulius Lukas emphasized the need to combine the events into a concise, thematic cycle. Also, to consult interdisciplinary artists Alt Lab, that are working with laboratory setting.  While engaging in the inclusivity topic, he advised us to narrow down the scope of disabilities that we want to analyze. Lastly, he again reminded us that it is important for teachers to have full and comprehensive information. </p><h3>Adjustments</h3><p>We decided to brainstorm on elements to combine our event series into more concise formation. After additional reading and consulting, we decided to narrow to vision and hearing disabilities.</p><h3>Our next steps</h3><p>Create common visuals for all of the events, announce each of them in the same manner and timing, during the beginning of each of the events to present the event cycle itself.  Search for partners and brainstorm potential tools that would be beneficial for visual or hearing impairment.</p>"
  },
  {
    "heading": "Preparing for crowdfunding campaign with Justinas Jakštonis",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "April",
    "line_number": 15,
    "label": "Preparing for crowdfunding campaign with Justinas Jakštonis",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Justinas Jakštonis is a Vilnius University fund public relations specialist. We contacted him asking for help in developing our crowdfunding campaign. We decided to organize our campaign in the VU fund platform and discussed the best ways to attract patrons to our project during our meeting.</p><h3>Contribution</h3><p>First, Justinas advised us to prepare a strong communication strategy to spread the message on our goal and gave several ideas on how to spread the news about the crowdfunding campaign - through social media, science communicators, Vilnius University media channels. He also suggested preparing for the worst-case (not reaching the goal) and the best-case (raising more than expected) scenarios. </p><h3>Adjustments</h3><p>We agreed on creating a crowdfunding campaign together with Vilnius University fund to raise money for our project.</p><h3>Our next steps</h3><p>'Create a communication package, including virtual ''thank you'' cards and info pack on our project.  Spread the information on our social media and to contact other media channels, influencers.'</p>"
  },
  {
    "heading": "'Discusssing ''Sense Lab'' concept with Alt-lab team '",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "April",
    "line_number": 16,
    "label": "'Discusssing ''Sense Lab'' concept with Alt-lab team '",
    "tooltip": null,
    "description": "<h3>Description</h3><p>'We talked with Alt-lab representatives Kamilė Krasauskaitė and Mindaugas Gapševičius. Alt-lab is an open, non-disciplinary laboratory dedicated to artistic-scientific research and the implementation of interdisciplinary projects. Alt-lab is a place where artists enable scientific concepts into their practice. As we were planning to educate people about synthetic biology in a new way through art, we decided to reach out to its representatives. We met with Mindaugas and Kamilė and presented them with the concept of ''Sense lab''. As we were at our first stage of organizing the events, we had a short brainstorming session together. Kamilė and Mindaugas also shared their artistic experiences and contacts that could help create our events. At the end of our meeting, we decided to offer Kamilė to collaborate with one of our events. '</p><h3>Contribution</h3><p>Our discussion lead to finding a connection for our events - human senses. Meaning that we would host five events explaining synthetic biology from different perspectives. Moreover, artists stressed that we should make our events as various as possible. Thus, we decided to offer the public a variety of events - workshop, degustation, concert, installation followed by discussions and lectures.</p><h3>Adjustments</h3><p>As our project received support from the artists and they saw a need for that kind of educational activity, we decided to pursue the idea of educating the public through science and art synthesis while exploiting five senses: touch, smell, taste, vision, and hearing. We decided on a direction for Sense Lab: workshop with Kamilė, using bread making as a media.</p><h3>Our next steps</h3><p>'Continue working with Kamilė on the conceptualization of the ''Sense Lab: touch'' part and organizing an interactive workshop together  Create concepts and find partners for the rest of the human senses related events.'</p>"
  },
  {
    "heading": "Understanding the difficulties of inclusive education with dr. Barbara Heard",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "April",
    "line_number": 17,
    "label": "Understanding the difficulties of inclusive education with dr. Barbara Heard",
    "tooltip": null,
    "description": "<h3>Description</h3><p>'Dr. Barbara R. Heard is an associate professor of biology from Atlantic Cape Community College. In 2016, she conducted a study to evaluate the effectiveness of the specific accommodations, such as tactile models and audible equipment, provided for students with blindness and visual impairment in the college biology laboratory. While researching various articles on inclusive education, we discovered an article ''Science for everyone'' written by Barbara and decided to contact her. Luckily, she agreed to meet with us and share her experiences of working with disabled students. At first, she presented the situation in the USA, what measures are being taken to include students into the learning process, what the regulations are, how spaces are being adapted to the special needs, etc. Then we put more focus on blind students' education. Barbara introduced us to the tried and true methods of teaching life sciences. Finally, we presented our human practice activity plan and discussed current and possible adaptations to make our education as inclusive as possible.'</p><h3>Contribution</h3><p>Barbara gave us great tips on how and where to start our inclusivity activities, what approach should be taken towards disabled students, and which areas of inclusive education are underdeveloped. She explained the concept of universal instructional design and some basics of it - adaptations to documents and slides to make them accessible to all students. Moreover, we gained insights into the main challenges and dangers that blind or physically impaired students meet when doing lab work. Barbara advised us to get our material, instruments, etc. reviewed by people as we develop them as this will ensure that we are doing everything correctly.</p><h3>Adjustments</h3><p>After this meeting, we decided to develop our inclusive education plan further, contact local stakeholders and research the topic more deeply as we saw there are many problems we did not know beforehand. As this meeting was a starting point for us, we identified the direction in which we will move. </p><h3>Our next steps</h3><p>Contact with local experts, stakeholders on inclusive education.  Improve our 6th SynBio Sense project by making it accessible for the blind by creating tactile models with information about the model.</p> <img src=\"https://2021.igem.org/wiki/images/2/2e/T--Vilnius-Lithuania--Barbara.png\"/>"
  },
  {
    "heading": "Getting to know the situation in our university with Indrė Širvinskaitė",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "April",
    "line_number": 18,
    "label": "Getting to know the situation in our university with Indrė Širvinskaitė",
    "tooltip": "Focusing on visual and hearing impairments",
    "description": "<h3>Description</h3><p>Indrė Širvinskaitė is a Vilnius University Disability Affairs Coordinator. The inclusivity topic for us was a bit new. Therefore, we decided to start digging deeper by consulting a person that knows the most about the situation in our institution - the environment that is closest to us. We discussed the most pressing issues, what needs to be done from the university and government sides, brainstormed on our possible contribution. We brainstormed on our possible contribution.</p><h3>Contribution</h3><p>'Indrė expressed support for our interest in inclusivity topic because it is inclusivity in higher education that is a bit forgotten and very fragmented. She presented many other stakeholders (students, institutions), which could be valuable for developing our further plans and available equipment and could be used by us.  She reflected that currently, school students with disabilities are written off to vocational school instantly, the roots of many problems are hiding in school or even kindergarten, therefore if we want more people with disabilities to have the opportunity to engage in STEM, we need to target school as well; also there is lack of empowerment of the disabled students. '</p><h3>Adjustments</h3><p>We identified that currently the most problems in life sciences are related to hearing impairments - there are not enough concepts about biology in sign language, students have to learn in three different languages. We found that both vision and hearing impairments, autism is a significant focus area.</p><h3>Our next steps</h3><p>Indre sent us a lot of information about disability in the university setting, and we got to familiarize ourselves with it.   Contact students Vytautas, Ugnė, Mindaugas with a disability whom Indre recommended.   Find and contact stakeholders who can consult on learning with hearing impairments. </p><h3>Main changes</h3><p>Focusing on visual and hearing impairments</p>"
  },
  {
    "heading": "Finding out more about amebiasis globally with Ingrida Zurlyte",
    "squad": "Human practices",
    "stakeholder": "Government",
    "month": "May",
    "line_number": 19,
    "label": "Finding out more about amebiasis globally with Ingrida Zurlyte",
    "tooltip": null,
    "description": "<h3>Description</h3><p>We struggled while finding out overall global situation of amebiasis prevalence, significance and related WHO agenda. Also, we wanted to reach out to local our targeted countries (in tropical regions) offices to gain insights from people nearest to the disease. Therefore we were hoping to get any contacts of WHO offices in Latin America, Asia, Africa. We exchanged several e-mails with the Head of the WHO office in Lithuania, Ingrida Zurlyte, with such questions.</p><h3>Contribution</h3><p>We received valuable publications on the global burden of foodborne diseases, including <i>Entamoeba histolytica</i> as a hazard causing enteric diseases. Another publication was about the current status of parasites in food.  We also got direct contacts to specialists from Pan-American Health Organization, Regional Office for Africa, WHO South-East Asia.</p><h3>Adjustments</h3><p></p><h3>Our next steps</h3><p>Get acquainted with mentioned resources.  Contact officers from other WHO subdivisions. </p>"
  },
  {
    "heading": "Discovering NGO's role and perspectives on inclusive education Lina Garbenčiūtė ",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "May",
    "line_number": 20,
    "label": "Discovering NGO's role and perspectives on inclusive education Lina Garbenčiūtė ",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Project Manager at Lithuanian Disability Forum (LDF) and  Equal Opportunities Coordinator at Vilnius University. We wanted to hear the perspective from the non-governmental field of inclusivity topic. Therefore we initiated a call with the Lithuanian Disability Forum. Lina is an expert in inclusive education, having higher education background. We learned what the LDF is doing in the field and which disabilities we could focus on the most. What is more, she directed us to other stakeholders and potential partners</p><h3>Contribution</h3><p>Lina supported our interest and emphasized the demand for it. However, she reflected that the advocacy process in the area is long and often fruitless and advised that we could be more valuable for the topic by bringing actual activities for our target group - (school) students. Also, we got to know more about educational material adaptations for intellectual disabilities</p><h3>Adjustments</h3><p>' We decided to think more about the opportunities to include activity for disabled school students in our activities plan. Also, to adapt the ''6th SynBio sense'' descriptions to the intellectually disabled. '</p><h3>Our next steps</h3><p>'Find partners from LASUC (Lithuanian Center for the Development of the Blind and Visually Impaired) that would help us to create tactile models and partners from Care Community for Intellectually Impaired ''Viltis'' for collaboration in simplification of written content'</p>"
  },
  {
    "heading": "Receiving feedback and planning further cooperation with Go Vilnius",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "May",
    "line_number": 21,
    "label": "Receiving feedback and planning further cooperation with Go Vilnius",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Go Vilnius is a city development and tourism agency. We made contacts with business and communication representatives Tautvydas Tamulevičius and Emilija Gaivenytė. We presented our two main human practices projects during the initial meeting - Sense Lab and 6th SynBio sense. </p><h3>Contribution</h3><p>The representatives expressed that public places might not be the best option for the 6th SynBio Sense. However, they saw the potential of the platform in schools. Regarding Sense Lab, they were excited about the series, especially hearing and vision events, and expressed interest in further collaborations regarding promotion</p><h3>Adjustments</h3><p>We drew our attention to implementing the \"6th SynBio Sense\" in the schools. We did not refuse the idea to implement the project in public places and searched for other opportunities. </p><h3>Our next steps</h3><p>Keep updated each other on opportunities to reach out to schools with 6th SynBio Sense project.  Get in touch when we have the material for promoting Sense Lab.</p>"
  },
  {
    "heading": "Familiarizing with the context of tropical regions with dr. Ieva Giedraitytė ",
    "squad": "Human practices",
    "stakeholder": "Public",
    "month": "July",
    "line_number": 22,
    "label": "Familiarizing with the context of tropical regions with dr. Ieva Giedraitytė ",
    "tooltip": "Informational content will be added to test prototype and probiotics ",
    "description": "<h3>Description</h3><p>Ieva is a lecturer at Vilnius University Institute of International Relations and Political Science. Her academic interests include European Union external factors, especially development aid, Latin America, and Development studies. We presented our prevention and diagnostic idea. I. Giedraitytė shared her academic knowledge and hands-on experience as she has lived in Honduras and has tight connections all around Latin America.</p><h3>Contribution</h3><p>I. Giedraitytė acknowledged the relevance of our chosen disease, amebiasis, as she had encountered with it previously, emphasized the importance of the role of local doctors and teachers in tackling such diseases and being relevant to locals, understanding their socio-economic contexts. However, she marked that amebiasis is not the primary problem in Latin America currently, and the general public behavior is to avoid all infectious diseases in general, including amebiasis. She shared that generally, Latin society is skeptical of health innovations. Still, at the same time, they experience harsh effects of diseases (due to poor economic and healthcare systems efficacy, developing nations are more susceptible) and seek to prevent sickness. For further development of the idea, the lecturer mentioned that the governments of regions with high prevalence might be interested in funding such initiatives and European Union instruments for development cooperation funding.</p><h3>Adjustments</h3><p>We reinforced our attitude that the probiotics and test should be as cheap as possible and easy to use. People need to understand why they need to test or prevent amebiasis; otherwise, it would not work. Therefore we need to optimize its manufacturing, design and, in further development stages, pay attention to informing users about the disease itself and our product. Also, while considering the possible negative aspects and risks, one idea struck us - that the local know-how is key to successfully implementing such projects; therefore, we need to collaborate with locals more. </p><h3>Our next steps</h3><p>Improving test design so it could be cheaper.  Brainstorming and searching for ideas on how to implement informational aspects into our test and probiotics design.  Research additional sources for funding for the entrepreneurial part of the project.</p><h3>Main changes</h3><p>Informational content will be added to test prototype and probiotics </p>"
  },
  {
    "heading": "Gaining knowledge on the process and tools for educating visually impaired with Gintaras Nenartavičius",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "July",
    "line_number": 23,
    "label": "Gaining knowledge on the process and tools for educating visually impaired with Gintaras Nenartavičius",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Gintaras Nenartavičius, an expert biology teacher from Lithuanian Center for the Development of the Blind and Visually Impaired. We contacted Gintaras due to his knowledge in inclusive education of biology. At first, we asked for a consultation on making tactile models for the blind, but later this grew to a collaboration. This led to a set of tools explaining main concepts relating to synthetic biology and a lesson at the Lithuanian Center for the Development of the Blind and Visually Impaired.</p><h3>Contribution</h3><p>During several calls and a meeting, we got to know how blind education differs from regular lessons, gained insights on how to prepare illustrations for special printers, and expanded our understanding on problems that teachers face while working with visually impaired students. </p><h3>Adjustments</h3><p>'We decided to adapt the virtual 3D models form ''6yh SynBio sense'' so they would be suitable for the blind. Particular tools for this would be 3D printed models and tactile illustrations with explanations in Braille. Moreover, we expanded the focus audience for our educational lectures.'</p><h3>Our next steps</h3><p>Decide on the most relevant topics for 3D printed models and tactile illustrations  Create designs for both of the activities  Prepare for the lesson at LASUC</p>"
  },
  {
    "heading": "Receiving guidance on simplified educational texts with Ana Pavilovič-Janič",
    "squad": "Human practices",
    "stakeholder": "Government",
    "month": "July",
    "line_number": 24,
    "label": "Receiving guidance on simplified educational texts with Ana Pavilovič-Janič",
    "tooltip": null,
    "description": "<h3>Description</h3><p>'Ana Pavilovič-Janič, a special pedagogue from a National Agency for Education Inclusivity department. As our contact with Care Community for Intellectualy Impaired ''VIltis'' regarding text adaptations was unsuccesful, we simplified texts ourselves and needed a feedback. Thus, we wrote to  a National Agency for Education Inclusivity department hoping for a consultation. Ana Pavilovič-Janič kindly agreed to help us by giving some tips on how to simplify texts and reviewed them afterwards.'</p><h3>Contribution</h3><p>'Ana sent us several examples on how simplified text should look and pointed out the mistakes we made while adapting model descriptions. She also commented on our ''6th SynBio sense'' webpage adaptations - according to her, it is easy to use, the font is well chosen and 3D models are clear.'</p><h3>Adjustments</h3><p>-</p><h3>Our next steps</h3><p>'Simplify the texts and upload to our ''6th SynBio sense'' webpage.'</p>"
  },
  {
    "heading": "Receiving feedback on Human Practices activities and discussing collaboration with Goda Raibytė",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "July",
    "line_number": 25,
    "label": "Receiving feedback on Human Practices activities and discussing collaboration with Goda Raibytė",
    "tooltip": null,
    "description": "<h3>Description</h3><p>'Goda Raibytė, a leading science communicator in Lithuanian context & host of a show ''Radical curiosity''. As Goda is a well-known science educator in Lithuania, we thought she would be the best person to give us critical insights into our activities. We introduced her to our planned events and discussed areas where we could make them better. She pinpointed the possibly weak areas of our human practices and offered some help with contacting possible partners.'</p><h3>Contribution</h3><p>'Goda was impressed with our activity plan and gave us positive feedback. She offered some contacts from the intermedia art field that could be useful for our ''Sense Lab''. However, she mentioned that strong and wide communication would make our project even better. She offered us to come to her show to talk about synthetic biology and to find some other partners that would be willing to work with us on spreading the message about our activities.'</p><h3>Adjustments</h3><p>We agreed that at the current point, additional contacts with artists would not improve our project. We acknowledged Goda's advice to include more media channels in our communication.</p><h3>Our next steps</h3><p>Find a media channel willing to collaborate with our science communication and to offer influencers to create educational content together</p>"
  },
  {
    "heading": "Familiarizing ourselves with local public experiences of amebiasis with iGEM teams",
    "squad": "Human practices",
    "stakeholder": "Public",
    "month": "July",
    "line_number": 26,
    "label": "Familiarizing ourselves with local public experiences of amebiasis with iGEM teams",
    "tooltip": null,
    "description": "<h3>Description</h3><p>We had multiple calls with iGEM teams from our targeted regions: IISER Berhampur from India, FCB-UANL Mexico, AFCM Egypt. We presented our project's problem, idea, and tools for the solution in each of them. We were very keen on receiving any kind of feedback. </p><h3>Contribution</h3><p>Unfortunately, the partner teams recognized that the disease is not so well known and present in their surroundings and is more common in poorer regions where people have little understanding about sanitation and hygiene, poor access to doctors and healthcare institutions. </p><h3>Adjustments</h3><p>We adapted not so much the wet lab but related aspects of the AmeBye, like human practices. With both teams, we arrived at a decision that raising awareness is crucial in this case. A lot of cases might be prevented with the simplest hygiene.</p><h3>Our next steps</h3><p>Exchange contacts related to each of the teams' projects specialists for more in-depth knowledge of the local situation.  Create an educational material to be disseminated in India, Mexico, Egypt.</p><img src=\"https://2021.igem.org/wiki/images/b/ba/T--Vilnius-Lithuania--FCB_UANL_meeting.png\"/> <img src=\"https://2021.igem.org/wiki/images/c/c6/T--Vilnius-Lithuania--Berhampur_meeting.png\"/>"
  },
  {
    "heading": "Understanding requirements to enter the drugs market with Kristina Povilaitienė",
    "squad": "Human practices",
    "stakeholder": "Government",
    "month": "August",
    "line_number": 27,
    "label": "Understanding requirements to enter the drugs market with Kristina Povilaitienė",
    "tooltip": null,
    "description": "<h3>Description</h3><p>During the intensive period of probiotic bacterial strain development, we have decided to check whether we have considered the most important requirements, regulations, and possible difficulties in entering the drug market. For that reason, we had the consultation with the Head of medicine registration department of the State Medicines Control Agency of Lithuania Kristina Povilaitienė. </p><h3>Contribution</h3><p>During the informative consultation, Kristina drew the line between development strategies of medicine containing genetically modified and non modified organisms, introduced into the general policies in Lithuania. She explained when medicine can be registered locally and when European Medicines Agency should approve it. Also, we have been informed that from 2021 there are some changes in medicine approvement regulations, and now it is easier to conduct clinical trials in separate countries. It is relevant in Lithuania, where the population is too small to obtain a sample of investigators of needed size and variety. </p><h3>Adjustments</h3><p>We evaluated our projects possibilities to be developed till market entering medicine. For now, we have collected contacts where we could refer for some professional help and received documented regulations which we will further examine individually. </p><h3>Our next steps</h3><p>Further analyse regulations for approvement of medicine containing genetically modified organisms and use this information for entrepreneurship plan.</p>"
  },
  {
    "heading": "Receiving feedback on our wiki accessibility with Jurij Nesvat",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "August",
    "line_number": 28,
    "label": "Receiving feedback on our wiki accessibility with Jurij Nesvat",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Jurij Nesvat is a test engineer who is passionate about accessibility side of testing websites. Since accessibility is a delicate subject, several questions regarding this field in website development arose to us. Therefore we decided to refer to J. Nesvat to get a professional insight about the accessibility side of the Wiki page.</p><h3>Contribution</h3><p>J. Nesvat kindly answered our questions related to certain points in WCAG and our choice of target groups for which we intended to direct our accessibility adjustments. Initially, we chose to adjust our page to make it more focusable for individuals with cognitive disorders and ADHD and more friendly for those with dyslexia and epilepsy. The professional also tested the page himself and provided insight about the changes that should be implemented before Wiki Freeze. </p><h3>Adjustments</h3><p>After the consultation we decided to remove seizure-safe and ADHD-friendly adjustments, since these functionalities are not usually involved in the websites. Our website will not contain elements that are blinking more frequently than three times per second. Therefore it should not cause a seizure. Additionally, ADHD adjustments are not very common in Web development. </p><h3>Our next steps</h3><p>Test the website with a screen-reader and fix any present issues.  Check whether the color contrast is appropriate.</p>"
  },
  {
    "heading": "'Discussing further implementation and commercialization of ''AmeBye'' with Andrius Šiaučiūnas and Laurynas Skukauskas'",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "September",
    "line_number": 29,
    "label": "'Discussing further implementation and commercialization of ''AmeBye'' with Andrius Šiaučiūnas and Laurynas Skukauskas'",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Andrius Šiaučiūnas is our team's long time sponsor, one of the pioneers in printing businesses. Laurynas Skukauskas, CEO of high-end aviation design enterprise. Both of them are colleagues interested in investing in promising health-related pre-startups.</p><h3>Contribution</h3><p>We reached an agreement for further development of aptamer-based diagnostic devices. They also looked into our plans for creating more diagnostic tests and possible expansion into the probiotics niche and proposed some modifications.</p><h3>Adjustments</h3><p>We identified our problem with proposed business plan that it was a little too pessimistic in cash flow analysis. Andrius and Laurynas advised to increase our profit forecast by 10 percent.</p><h3>Our next steps</h3><p>Change our approach on selling power to match market.  Check for any other companies that may be potential competitors. </p>"
  },
  {
    "heading": "Developing our entrepreneurial strategy with dr. Monika Paulė",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "September",
    "line_number": 30,
    "label": "Developing our entrepreneurial strategy with dr. Monika Paulė",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Monika Paule is a experienced tech entrepreneur and innovator, CEO and co-founder of CasZyme which specialises in CRISPR based technologies. As she is significantly experienced in working with life sciences startups, we asked her for help in developing a business plan. </p><h3>Contribution</h3><p>We had two meetings with Dr. Paule, during which we discussed our business model, exit strategy, global market, legislation requirements and singled out our target groups,  </p><h3>Adjustments</h3><p>We agreed that, our financial plan needed corrections, as well as SWOT analysis, sustainable development goals.  Paulė highlighted, that it is important to create additional visual content, in order to emphasize some main points of the plan.</p><h3>Our next steps</h3><p>Adjust business plan according to suggestions  Create more visual content and graphs.</p>"
  },
  {
    "heading": "'Discussing and brainstorming synthetic biology with ''Artisans'''",
    "squad": "Human practices",
    "stakeholder": "Practitioners",
    "month": "March",
    "line_number": 31,
    "label": "'Discussing and brainstorming synthetic biology with ''Artisans'''",
    "tooltip": null,
    "description": "<h3>Description</h3><p>'Ensemble ''Artisans'', young Lithuanian contemporary music composers and performers. Their main focus is to create, perform boundary-breaking contemporary music and educate our society about its existence. We contacted ''Artisans'', hoping they would be interested in working with us on one of the ''Sense Lab'' events. Our team presented this year's activities in the education field during the meeting, briefly explained what synbio is, and offered to collaborate. Musicians agreed to create musical compositions about synthetic biology for the hearing part of the event. '</p><h3>Contribution</h3><p>Musicians helped us to settle with a concept for the hearing part of the project. Moreover, their questions about synthetic biology allowed us to see what interests people coming from different fields. They also raised philosophical and bioethical questions that were beneficial for understanding what concerns people face.</p><h3>Adjustments</h3><p>As the meeting was successful and we all agreed on the concept, we did not have to make any adjustments on our project.</p><h3>Our next steps</h3><p>Prepare various topics about synthetic biology suggestions for musicians.  Create an informational package for the listeners.   Find a venue, instruments for the concert.</p>"
  },
  {
    "heading": "Discussing the issues of amebiasis diagnostics with Jolanta Žiliukienė",
    "squad": "Wet lab",
    "stakeholder": "Practitioners",
    "month": "March",
    "line_number": 32,
    "label": "Discussing the issues of amebiasis diagnostics with Jolanta Žiliukienė",
    "tooltip": "We changed our focus to creating qualitative test.",
    "description": "<h3>Description</h3><p>As more knowledge was gained on the Entamoeba histolytica diagnostic possibilities via articles, we felt the need for more practical insights concerning the topic. For that reason, we contacted Jolanta Žiliukienė, the Head of the Infectious disease diagnostics laboratory at the Santaros clinics.</p><h3>Contribution</h3><p>The specialist informed about the statistics of amebiasis in Lithuania and the currently used method of its detection – microscopal stool analysis. She pointed out that rapid diagnostic tests for this infection would be beneficial not only in the endemic countries but also in Lithuania. Such a tool would facilitate diagnostic laboratories specialists' work. Žiliukienė also mentioned the lack of medications in our country as one of the obstacles associated with amebiasis.</p><h3>Adjustments</h3><p>After the meeting, we understood that there is no need to create a quantitative test for amebiasis. It would be enough to simply detect Entamoeba histolytica.</p><h3>Our next steps</h3><p>   We will create qualitative test for amebiasis invasive form detection.  </p><h3>Main changes</h3><p>We changed our focus to creating qualitative test.</p> <img src=\"https://2021.igem.org/wiki/images/0/0d/T--Vilnius-Lithuania--ziliukiene.png\"/>"
  },
  {
    "heading": "Discovering new opportunities for the improvement of SELEX methodology with professor Edita Sužiedėlienė",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "March",
    "line_number": 33,
    "label": "Discovering new opportunities for the improvement of SELEX methodology with professor Edita Sužiedėlienė",
    "tooltip": null,
    "description": "<h3>Description</h3><p>During the intensive idea refinement period, our team has faced several problems related to the idea implementation. To fulfill these gaps, we have decided to present our ideas to professor Edita Sužiedėlienė who is the research Prorector at Vilnius University with a vast knowledge of molecular biology, prokaryotic genetic manipulations, and molecular mechanisms of antibiotic resistance. </p><h3>Contribution</h3><p>The professor reminded us to ask Vilnius-Lithuania iGEM 2019 team about issues they have faced during SELEX implementation in their project. Also, she gave us various insights about the possible optimizations of SELEX steps. Lastly, we have expressed concerns about aptamers' tertiary structure recovery after lyophilization. Consequently, the professor introduced several Suggestions on how to examine possible aptamers' tertiary structure alterations.</p><h3>Adjustments</h3><p>We decided to further look for examined SELEX optimizations, documented strategies for the method to avoid nonspecificities, and conduct a pilot test of lyophilized aptamers to investigate whether aptamers regain their tertiary structure and specificity to the recombinant E. histolytica protein. </p><h3>Our next steps</h3><p>  We will use 40-60 bp length ssDNA aptamers.    We outlined the optimization strategy: conduct ~ 10 SELEX cycles to prevent amplifying nonspecific double-stranded structures. <img src=\"https://2021.igem.org/wiki/images/d/d0/T--Vilnius-Lithuania--Suziedeliene.png\"/></p>"
  },
  {
    "heading": "Overviewing our ideas and possible issues with professor Rolandas Meškys",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "March",
    "line_number": 34,
    "label": "Overviewing our ideas and possible issues with professor Rolandas Meškys",
    "tooltip": null,
    "description": "<h3>Description</h3><p>At the end of March, we still had three ideas, so we decided to present two of them to prof. Rolandas Meškys and receive critical feedback. R. Meškys is the Head of the Department of Molecular microbiology and Biotechnology in Vilnius University Life Sciences Center and for several years has been Principal Investigator at Vilnius-Lithuania iGEM teams.</p><h3>Contribution</h3><p>The professor pointed out the direction we needed to explore more: making a bigger library of molecules that can be lethal to Entamoeba histolytica and how we could improve the SELEX method for better results and bigger efficiency.</p><h3>Adjustments</h3><p>We need to broaden the list of potential amoeba toxic compounds and search more information about SELEX improvement. </p><h3>Our next steps</h3><p>  Further study of SELEX method, investigations about its optimization.  Searching for more compounds against amoeba.    </p>"
  },
  {
    "heading": "Treatment part of the project review with professor Eglė Lastauskienė",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "April",
    "line_number": 35,
    "label": "Treatment part of the project review with professor Eglė Lastauskienė",
    "tooltip": null,
    "description": "<h3>Description</h3><p>After setting our minds on creating flavonoid-based probiotics for the treatment of amebiasis and gathering all of the information needed for choosing the kind of organism that would serve our purpose the best, we decided to organize a meeting with Eglė Lastauskienė, professor of the Department of Microbiology and Biotechnology, Institute of Biosciences, Life Sciences Center.</p><h3>Contribution</h3><p>Professor advised using yeast Saccharomyces boulardii as chassis for engineered probiotics instead of gram-positive bacteria. She also suggested using different organisms to increase the chance of finding an organism that would work and encapsulating probiotics with prebiotics. We were provided with some contacts of specialists who would help us to answer questions regarding probiotics.</p><h3>Adjustments</h3><p>The decision was made to concentrate not only on the gram-positive bacteria and to consider more microorganisms species as potential probiotics. As professor suggested, we decided to consider flavonoids' attachment to the digestive tract and their potential effect on the host.</p><h3>Our next steps</h3><p> Research on appropriate probiotic organisms while considering transformation success, organism's ability to synthesize the desired flavonoid </p> <img src=\"https://2021.igem.org/wiki/images/6/6e/T--Vilnius-Lithuania--Lastauskiene.png\"/>"
  },
  {
    "heading": "Reviewing recent progress in preparation for wet lab work with professor Rolandas Meškys",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "April",
    "line_number": 36,
    "label": "Reviewing recent progress in preparation for wet lab work with professor Rolandas Meškys",
    "tooltip": null,
    "description": "<h3>Description</h3><p>During the meeting, we have explained our project plan in detail and discussed possible issues, and the professor has helped us to raise some important questions and target our mindflow for detailed workflow analysis. We outlined some critical points in the detection part: we have not planned how we are going to get ssDNA from the dsDNA poll after PCR steps, measure sequences poll enrichment with the highest affinity aptamers, regulate the reaction stringency, measure the affinity of the selected aptamer to recombinant <i>E. histolytica</i> protein</p><h3>Contribution</h3><p>Professor advised searching for alternative methods for some SELEX steps in case something would go wrong or we would be running out of time. He also expressed his doubts about the success of our treatment/prevention part. In addition, the professor encouraged us to search for alternative colorimetric signal generating techniques that would be used in the detection test. Secondly, the professor has seen many uncertainties in the therapeutic part. The most compromising question - would chosen flavonoids and resveratrol be suitable for real-life usage because of their extensive reactivity and tendency to act as the main inhibitors of some medicine when consumed in higher doses. </p><h3>Adjustments</h3><p>During the meeting, we have agreed to use the surface plasmon resonance method to evaluate the level of aptamers affinity to Eh proteins. Furthermore, we have decided to analyze more deeply the synthesis requirements of polythiophene, which had been chosen as a suitable dye for the detection kit.  Moreover, we have raised some questions about the needed efficiency of the synthesis of the therapeutic compounds and the probable probiotics’ density in the gut.</p><h3>Our next steps</h3><p>  Deeper research of some variants of SELEX steps, raise considerations about PT dye and anticoagulant interactions. Analyze subtleties of PT dye synthesis and search for the most suitable negative controls for SELEX.   Solve uncertainties about flavonoid cross-reactions by digging deeper into this topic and elucidating the benefit to the health and side effects of all chosen therapeutic compounds. </p>"
  },
  {
    "heading": "Acquiring insights about flavonoids and resveratrol purification with Vytautas Petkevičius",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "April",
    "line_number": 37,
    "label": "Acquiring insights about flavonoids and resveratrol purification with Vytautas Petkevičius",
    "tooltip": null,
    "description": "<h3>Description</h3><p>In the last week of April, we had a fruitful conversation with Vytautas Petkevičius, who is the junior researcher at the Department of Molecular Microbiology and Biotechnology in Vilnius University Life Sciences Center. This meeting aimed to find out the possible strategies of resveratrol and flavonoids purification from the bacteria growth medium. During our meeting, we have crystallized the needed steps toward the strategy of efficient flavonoids purification.</p><h3>Contribution</h3><p>Vytautas gave us great advice on how to purify resveratrol and flavonoids from a bacterium growth medium with the highest yield.</p><h3>Adjustments</h3><p>We need to focus on those flavonoids synthesis, where possible minimum yield would be about 100-200 mg/L due to difficulties which might come up with a lower amount of compounds.</p><h3>Our next steps</h3><p>   Thorough analysis of chosen flavonoids and resveratrol chemical features. Chosen solvents should meet these requirements: to be environmentally friendly, not mix with water, efficiently dissolve resveratrol or flavonoids. </p>"
  },
  {
    "heading": "Discussion about preparation for work in the lab with professor Rolandas Meškys",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "April",
    "line_number": 38,
    "label": "Discussion about preparation for work in the lab with professor Rolandas Meškys",
    "tooltip": null,
    "description": "<h3>Description</h3><p>In order to update the main information about our project and raise most pressing questions at the time, we organized the meeting with our PI prof. Rolandas Meškys.</p><h3>Contribution</h3><p>Professor advised how to purify one of the chosen recombinant proteins. He also let us know his hesitancy about effectivity of our chosen metabolism pathways and he also provided the ability to use NGS for further SELEX aptamer analysis.</p><h3>Adjustments</h3><p>After the meeting it was decided to use rEh proteins as each other negative control, every three cycles sequence SELEX products by MiSeq technology. </p><h3>Our next steps</h3><p>MiSeq library preparation.</p>"
  },
  {
    "heading": " Exploring the possibilities to incorporate SPR experiments into the wet lab with Gintaras Valinčius",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "April",
    "line_number": 39,
    "label": " Exploring the possibilities to incorporate SPR experiments into the wet lab with Gintaras Valinčius",
    "tooltip": null,
    "description": "<h3>Description</h3><p> To ascertain aptamer-protein interaction measurement possibilities, we have organized the meeting with Gintaras Valinčius, the director of the Life science center, and the Head of the Department of Bioelectrochemistry and Biospectroscopy. During this consultation with the dr. Gintaras Valinčius, we have discussed the possible strategies to immobilize protein or even aptamer on the gold-covered plate surface. </p><h3>Contribution</h3><p>Dr. G. Valinčius gave us a piece of advice to research about the techniques to immobilize proteins through H-tag onto the gold plated surface in surface plasmon resonance (SPR) technique instead of only looking into aptamer immobilization methods. In addition, dr G. Valinčius gave us the contact of his colleague dr. Tadas Ragaliauskas, who is routinely working with the SPR technology, promised to help with these experiments from theoretical to practical sides. </p><h3>Adjustments</h3><p> Interestingly, within the team, we have not discussed earlier the possibly useful method to immobilize protein through His tag. We have been considering immobilization only through specific nucleotide sequences at the end of the chosen aptamer. So, the interesting and charming discussion opened our eyes to other possible techniques. We realized how much research is needed on this topic if we wish to conduct accurate measurements of interactions. We planned to compare protein versus aptamer immobilization benefits in aptamer-protein interaction strength determination experiments using the SPR method. </p><h3>Our next steps</h3><p>Search for information about protein immobilization through His-Tag onto the gold plated surface plates   Compare the benefits of protein versus aptamer immobilization in SPR technique.</p>"
  },
  {
    "heading": "About polythiophene synthesis with Daiva Tauraitė",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "April",
    "line_number": 40,
    "label": "About polythiophene synthesis with Daiva Tauraitė",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Daiva Tauraitė is the senior researcher at the Department of Molecular microbiology and Biotechnology in Vilnius University Life Sciences Center. Together we reviewed PT synthesis plan, needed methods.</p><h3>Contribution</h3><p>Dr. Daiva Tauraitė advised not to synthesize such complex polymer as it is time consuming and not efficient. She suggested that we should research other compounds which include shorter reaction times and less materials.</p><h3>Adjustments</h3><p>We decided not to synthesize polythiophene polymers for aptamer conjugation.</p><h3>Our next steps</h3><p>Find another polymer for colourimetric detection.</p>"
  },
  {
    "heading": "Analysing treatment part of the project with pharmacologist Jolanta Gulbinovič",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "May",
    "line_number": 41,
    "label": "Analysing treatment part of the project with pharmacologist Jolanta Gulbinovič",
    "tooltip": "Treatment tool switched to prevention, Established criteria for the selection of preventive compound.",
    "description": "<h3>Description</h3><p>Jolanta Gulbinovič is a professor at Vilnius University, specializing in pharmacology, assessor at Medical Products Agency Läkemedelsverket. We discussed our treatment part of the project, especially the criteria for the most suitable treatment compounds. Review of probiotic bacteria usage possibilities, possible pharmacokinetic and pharmacological issues related to our idea implementation, and discussion about the most important criteria for the final flavonoid selection and how to rank it correctly by importance.</p><h3>Contribution</h3><p>Advised us to tilt treatment to prevention from infection, from spreading the cysts of Entamoeba histolytica and treatment of intestine infection but not the liver abscess as we thought earlier. Amoebic liver abscess morphologically has a thick capsule, which prevents many drugs from entering the inside of the abscess, where the amoebas proliferate - the drugs become ineffective. The main criteria for the preventive compound are the smaller minimal effective concentration and its local effect (with no systemic effects). </p><h3>Adjustments</h3><p>We decided to shape the project from liver abscess treatment to the creation of a prevention tool, which will be used to stop the spreading of amebiasis, as a supplementary tool for the treatment of intestine form and preventing amebiasis occurrence. </p><h3>Our next steps</h3><p>Rank all chosen flavonoids based on discussed criteria and choose the only one for further work.   Research prevention, in general, to get familiarized with the field. </p><h3>Main changes</h3><p>Treatment tool switched to prevention, Established criteria for the selection of preventive compound.</p> <img src=\"https://2021.igem.org/wiki/images/8/87/T--Vilnius-Lithuania--Gulbinovic.png\"/>"
  },
  {
    "heading": "Discussing aptamer sequencing with Rapolas Žilionis",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "May",
    "line_number": 42,
    "label": "Discussing aptamer sequencing with Rapolas Žilionis",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Rapolas Žilionis is Chief Scientific Officer at Droplet Genomics and specialises in Next-Generation Sequencing (NGS). The purpose of contacting was to get insight about how Illumina sequencing works for short DNA sequences, what to expect for low diversity aptamer pool.</p><h3>Contribution</h3><p>R. Žilionis suggested to make aptamer pool more diverse by using additional diverse library, provided information about sequencing and using various indexes in primer design.</p><h3>Adjustments</h3><p>We decided to make our sequencing pool more diverse by providing external DNA pool. Also used information when </p><h3>Our next steps</h3><p>Buy diverse PhiX library, choose needed indexes and prepare primer sequences.</p>"
  },
  {
    "heading": "Discussing aptamer sequencing with Žana Kapustina",
    "squad": "Wet lab",
    "stakeholder": "Practitioners",
    "month": "June",
    "line_number": 43,
    "label": "Discussing aptamer sequencing with Žana Kapustina",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Žana Kapustina is R&D Manager at Thermo Fisher Scientific. We have decided to check with her all of our <i>in silico</i> made aptamer primer designs and to clarify about NGS primers, purification before NGS PCR.</p><h3>Contribution</h3><p>Approvement of our sequencing primer choices. Corrections on used sequences.</p><h3>Adjustments</h3><p>Sequences were corrected.</p><h3>Our next steps</h3><p>Order needed primer sequences.</p>"
  },
  {
    "heading": "Discussion with Inga Songailienė of genome editing techniques ",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "June",
    "line_number": 44,
    "label": "Discussion with Inga Songailienė of genome editing techniques ",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Inga Songailienė is a junior researcher at the Department of Biotechnology in Vilnius University. We decided to get in touch because she has a lot of knowledge and experience in genome editing, and we needed advice on the most appropriate genome editing technique for our case.</p><h3>Contribution</h3><p>Songailienė advised to use genome editing technique based on using Cas9 protein in E. coli Nissle 1917. She also promised to provide plasmids for our experiments. However, she couldn’t tell us more specific information about editing the L. casei genome.</p><h3>Adjustments</h3><p>Before the meeting, we had an idea to insert our constructs in multiple genome sites. However, Songailienė said that there is no need for this. Instead, we could put our construct under a stronger promoter. We also decided to use a method with Cas9 for E. coli and look for some other experts who had experience with gram-positive bacteria genome editing.</p><h3>Our next steps</h3><p>Further prepare for genome editing from theoretical and wet-lab experimental side, look for other experts who had experience with Lactobacillus spp. genome editing. </p> <img src=\"https://2021.igem.org/wiki/images/8/86/T--Vilnius-Lithuania--Songailiene.png\"/>"
  },
  {
    "heading": "Acquiring contacts from Mantė Makauskaitė to reach the target audience in Africa",
    "squad": "Wet lab",
    "stakeholder": "Public",
    "month": "July",
    "line_number": 45,
    "label": "Acquiring contacts from Mantė Makauskaitė to reach the target audience in Africa",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Afriko is a Lithuanian non-governmental organization, which activities are directed to merge Lithuania and Africa in social, political, and cultural ways. To get more insights, we have contacted Mantė Makauskaitė, an international consultant with a particular focus on public sector-related projects.</p><h3>Contribution</h3><p>Mantė has drawn a broaden view of Africa continent natives communities - natives trust in government and international institutions, community agents impact to formation of public opinion. A consultant from \"Afriko\" also suggested help for catching new contacts in chosen region and contact the Embassy of the Republic of Lithuania to the Republic of South Africa</p><h3>Adjustments</h3><p>We have understood that we will not be able to get real numbers of annual amebiasis cases in Africa because of lack of health care system centralization. So, from now on, we will apply critical appraisal for statistics analysis. </p><h3>Our next steps</h3><p>Look for further contacts in the South Africa Republic and contact the Embassy of the Republic of Lithuania to the Republic of South Africa.  Find some research papers about the best form of giving support to developing countries in Africa. </p>"
  },
  {
    "heading": "Discussing amebiasis situation in Mexico with prof. Maria Del Socorro Flores Gonzalez",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "July",
    "line_number": 46,
    "label": "Discussing amebiasis situation in Mexico with prof. Maria Del Socorro Flores Gonzalez",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Maria Del Socorro Flores Gonzalez is a professor at the Institute of Biotechnology, Faculty of Biological Sciences in UANL. FCB-UANL iGEM team has suggested contacting her to get in touch with the professor to receive insights about the situation in Mexico regarding amebiasis and feedback on our potential solutions for this health issue.</p><h3>Contribution</h3><p>Professor informed us about currently used diagnostic methods (microscopic stool analysis, ELISA tests) and their drawbacks. She pointed out that our selected biomarkers for developing the diagnostic test should be produced only by Entamoeba histolytica, and we must know the concentrations of such markers in blood plasma. The professor shared some insights on the situation and awareness in Mexico public and how we could spread information about amebiasis.</p><h3>Adjustments</h3><p>We understood that not having the particular concentrations is a significant drawback for our test and further explorations are needed. Regarding the specificity - the CP5 biomarker is specific to E. histolytica.  After the meeting, we got a more accurate view of the actual situation regarding amebiasis in Mexico. </p><h3>Our next steps</h3><p>Continue research on the concentrations of biomarkers in plasma.  Adapt diagnostic tests and probiotics more for use in the real world.  Create educational content according to the recommendations.</p>"
  },
  {
    "heading": "Discussing protein solubilization strategies with Nina Urbelienė",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "July",
    "line_number": 47,
    "label": "Discussing protein solubilization strategies with Nina Urbelienė",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Dr. N. Urbelienė is a member of our PI's lab with tons of experience in insoluble proteins, their purification, and renaturation. We were not successful in purifying our proteins therefore we wanted to consult on troubleshooting.</p><h3>Contribution</h3><p>Informed us about different ways of solubilising, refolding and purifying and insoluble protein and provided us with necessary lab reagents </p><h3>Adjustments</h3><p>We tried out different protein refolding buffers and a few different ways of concentrating the proteins after the refolding process</p><h3>Our next steps</h3><p>'Try to refold a solubilised protein with the ''on column'' method.   Try to concentrate buffers with bigger volumes with carboxymethyl cellulose. We will add 20 percent saccharose to our refolding buffer, elevate the glycerol concentration from 5 percent to 10 percent, and examine the effect of different concentrations of SDS in the activation process.   We will optimize the purification process as well by not changing the pH from the lysis buffer to get a bigger purification yield.'</p>"
  },
  {
    "heading": "Discussion amebiasis situation in Egypt with prof. Azza El-Adawy and iGEM AFCM-Egypt team",
    "squad": "Wet lab",
    "stakeholder": "Academia",
    "month": "July",
    "line_number": 48,
    "label": "Discussion amebiasis situation in Egypt with prof. Azza El-Adawy and iGEM AFCM-Egypt team",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Azza El-Adawy is a professor of Medical parasitology, parasitology department, Faculty of Medicine in Cairo University. We got in touch with her through the iGEM AFCM-Egypt team. We decided to organize a meeting with her and the team to get more insights into Egypt's situation regarding amebiasis and feedback on our potential solutions for this health issue.</p><h3>Contribution</h3><p>Doctor informed us about currently used diagnostic methods (microscopic stool analysis) and their drawbacks. Reflecting on our project's diagnostic part, she recognized the importance and elaborated that a sensitive and specific, cheap rapid test is needed for intestinal, noninvasive amebiasis diagnostics as well. She advised us to consider possible naringenin resistance in Entamoeba histolytica. What is more, the professor shared some insights on the situation and awareness in Egypt public and how we could spread information about amebiasis. We were also provided with answers to why amebiasis is so common in Egypt.</p><h3>Adjustments</h3><p>We realized how important intestinal amebiasis diagnostics is and will keep this demand in mind for the future development of the project. Possible naringenin resistance is an important issue to discuss in the future. However, we decided that it was out of our current scope. We also got a more accurate view on the actual situation regarding amebiasis in Egypt. </p><h3>Our next steps</h3><p>Adapt diagnostic test and probiotics better for use in the real world.  Create educational content according to the recommendations.</p> <img src=\"https://2021.igem.org/wiki/images/9/9c/T--Vilnius-Lithuania--AFCM_Egypt.png\"/>"
  },
  {
    "heading": "Getting to know amebiasis with Embassy of the Republic of Lithuania to the Republic of South Africa",
    "squad": "Wet lab",
    "stakeholder": "Government",
    "month": "August",
    "line_number": 49,
    "label": "Getting to know amebiasis with Embassy of the Republic of Lithuania to the Republic of South Africa",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Priviously we have tried to find some diagnostic laboratories in abroad by ourselves. However, it has not been successful, therefore we contacted the Embassy with such question. </p><h3>Contribution</h3><p>The embassy responded quickly and gave us some contacts where we can ask for help. Receive some information about the organizations in the Republic of South Africa which are working on the infectious disease investigation from the educational and scientific sides. </p><h3>Adjustments</h3><p>Seek for the deeper insights about amebiasis infection from pathology and diagnostic organizations in the Republic of South Africa.</p><h3>Our next steps</h3><p>Contact with the National Health Laboratory Service (NHLS) and Pathology Learning Center.</p>"
  },
  {
    "heading": "Comprehending Lithuanian clinical practice of amebiasis with Audrone Marcinkute",
    "squad": "Wet lab",
    "stakeholder": "Practitioners",
    "month": "August",
    "line_number": 50,
    "label": "Comprehending Lithuanian clinical practice of amebiasis with Audrone Marcinkute",
    "tooltip": null,
    "description": "<h3>Description</h3><p>Vilnius University Santaros Clinics Infectologist Audrone Marcinkute specializes in parasitic infections, especially amebiasis, and has the most experience regarding amebiasis in whole Lithuania. Therefore getting to know the experiences, challenges in clinical practice was our priority from the beginning of the project, as we aim to bring advance to clinical practice as well. Audrone Marcinkute presented several cases from her clinical practice, emphasizing their diagnostic part and symptomatic, provided feedback to our solutions.</p><h3>Contribution</h3><p>Audrone Marcinkute pointed out that since year 2007, the difference in proportion between intestinal and extraintestinal amebiasis is increasing due to extraintestinal cases. This means that intestinal amebiasis passes unnoticeably. The test would be extremely beneficial and applicable. However, detection for intestinal form would also be very valuable because the earlier disease is identified, the better is the treatment. People should be keen on consuming our probiotics as their active substance is naturally occurring in plants. Input for our educational part: emphasis on clean water and water removal from food products</p><h3>Adjustments</h3><p>We got excited and motivated as the relevance of our project was confirmed. Further development for the detection of intestinal amebiasis is needed. However, we do not have enough time left. We need to adjust our communication about amebiasis by putting more emphasis on its transmission through water. Communication about probiotics should be emphasized on its natural origin in order to be more appealing for targeted customers.</p><h3>Our next steps</h3><p>We agreed to keep in touch as there were several questions raised that nor we, nor A. Marcinkute had no answer. A. Marcinkute offered to consult with other colleagues regarding the questions.  We edited the primary option of our educational poster for regions with the highest prevalence.</p> <img src=\"https://2021.igem.org/wiki/images/e/e5/T--Vilnius-Lithuania--Marcinkute.jpg\"/>"
  }
]