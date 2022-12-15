
var bibleVerses = [
'John 3:16: For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. ',
'Jeremiah 29:11: For I know the plans I have for you,” declares the LORD, “plans to prosper you and not to harm you, plans to give you hope and a future. ',
'Romans 8:28: And we know that in all things God works for the good of those who love him, who have been called according to his purpose. ',
'Philippians 4:13: I can do everything through him who gives me strength. ',
'Genesis 1:1: In the beginning God created the heavens and the earth. ',
'Proverbs 3:5: Trust in the LORD with all your heart and lean not on your own understanding. ',
'Proverbs 3:6: in all your ways acknowledge him, and he will make your paths straight. ',
'Romans 12:2: Do not conform any longer to the pattern of this world, but be transformed by the renewing of your mind. Then you will be able to test and approve what God’s will is—his good, pleasing and perfect will. ',
'Philippians 4:6: Do not be anxious about anything, but in everything, by prayer and petition, with thanksgiving, present your requests to God. ',
'Matthew 28:19: Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit.',
'Gal 2:20: I have been crucified with Christ and I no longer live, but Christ lives in me. The life I live in the body, I live by faith in the Son of God, who loved me and gave himself for me.',
'1 John 1:9: If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.',
'Rom 5:8: But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.',
'Phil 4:8: Finally, brothers, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.',
'Phil 4:7: And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.',
'Josh 1:9: Have I not commanded you? Be strong and courageous. Do not be terrified; do not be discouraged, for the LORD your God will be with you wherever you go.”',
'Heb 11:1: Now faith is being sure of what we hope for and certain of what we do not see.',
'2 Cor 5:17: Therefore, if anyone is in Christ, he is a new creation; the old has gone, the new has come!',
'2 Cor 12:9: But he said to me, “My grace is sufficient for you, for my power is made perfect in weakness.” Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me.',
'Isa 41:10: So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.',
'Matt 11:29: Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.',
'John 16:33: “I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.”',
'2 Tim 1:7: For God did not give us a spirit of timidity, but a spirit of power, of love and of self-discipline.',
'2 Cor 5:21: God made him who had no sin to be sin for us, so that in him we might become the righteousness of God.',
'Rom 15:13: May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.',
'Heb 11:6: And without faith it is impossible to please God, because anyone who comes to him must believe that he exists and that he rewards those who earnestly seek him.',
'Matt 11:30: For my yoke is easy and my burden is light.”',
'Jas 5:16: Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous man is powerful and effective.',
'1 John 3:16: This is how we know what love is: Jesus Christ laid down his life for us. And we ought to lay down our lives for our brothers.'
]
function verseGenerator(){
var randomIndex = Math.floor(Math.random() * (bibleVerses.length));
document.getElementById("#BibleVerse").innerText = bibleVerses[randomIndex];

}
