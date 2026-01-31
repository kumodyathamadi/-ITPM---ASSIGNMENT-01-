const { test, expect } = require('@playwright/test');

// Configuration
const CONFIG = {
  url: 'https://www.swifttranslator.com/',
  timeouts: {
    pageLoad: 2000,
    afterClear: 1000,
    translation: 3000,
    betweenTests: 2000
  },
  selectors: {
    inputField: 'Input Your Singlish Text Here.',
    outputContainer: 'div.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap'
  }
};

// Test Data - Completely New Test Cases
const TEST_DATA = {
  positive: [
    // Simple Sentences
    {
      tcId: 'Pos_Fun_001',
      name: 'Convert a short daily greeting phrase',
      input: 'oyaa kohee idhandha aavee?',
      expected: 'ඔයා කොහේ ඉදන්ද ආවේ?',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_002',
      name: 'Long mixed-language input with slang + typo causes incorrect conversion',
      input: 'mata heta udhee 10ta vagee maharagamata yanna thiyanavaa ban , ee hindhaa mama adha komahari komahari mee paper eka ivara karaganna balanna oonii naethnam heta physics class ekata gihin baaradhenna vidhiyak naehaene.... ',
      expected: 'මට හෙට උදේ 10ට වගේ මහරගමට යන්න තියනවා බන් , ඒ හින්දා මම අද කොමහරි කොමහරි මේ paper එක ඉවර කරගන්න බලන්න ඕනී නැත්නම් හෙට physics class එකට ගිහින් බාරදෙන්න විදියක් නැහැනෙ....  ',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_003',
      name: 'Convert a short request phrase',
      input: 'amith: machan sureesh, adha kohedha yannee? sureeSh: adha nam vaeda tikak thiyenavaa ban. uBAta kohedha yanna thiyennee? amith: mee mama hithuvee tavun ekata gihin poddak kanna kiyalaa. uBAth enavadha? sureeSh: hoDHA adhahasak nee. vaeda tika ivara karalaa maath ennam kolloo. amith: ehenam havasa 5ta bus stand eka Laga set vemuu. sureeSh: okay ban. adha kaalekata passee aathal ekak ganna puluvan veyi. amith: aeththatama. yaaluvoo ekka innakotama thamayi maara nidhahasak dhaenennee. sureesh: hari hari, ehenam havasata setvemuu aruutath kiyannam mama dhineeshta',
      expected: 'අමිත්: මචන් සුරේශ්, අද කොහෙද යන්නේ? සුරේෂ්: අද නම් වැඩ ටිකක් තියෙනවා බන්. උඹට කොහෙද යන්න තියෙන්නේ? අමිත්: මේ මම හිතුවේ ටවුන් එකට ගිහින් පොඩ්ඩක් කන්න කියලා. උඹත් එනවද? සුරේෂ්: හොඳ අදහසක් නේ. වැඩ ටික ඉවර කරලා මාත් එන්නම් කොල්ලෝ. අමිත්: එහෙනම් හවස 5ට bus stand එක ළග සෙට් වෙමූ. සුරේෂ්: okay බන්. අද කාලෙකට පස්සේ ආතල් එකක් ගන්න පුලුවන් වෙයි. අමිත්: ඇත්තටම. යාලුවෝ එක්ක ඉන්නකොටම තමයි මාර නිදහසක් දැනෙන්නේ. සුරේශ්: හරි හරි, එහෙනම් හවසට සෙට්වෙමූ අරූටත් කියන්නම් මම දිනේශ්ට',
      category: 'Daily language usage',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    
    {
      tcId: 'Pos_Fun_004',
      name: 'Convert polite phrasing',
      input: 'karunaakaralaa meheta enavaa !',
      expected: 'කරුනාකරලා මෙහෙට එනවා !',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_005',
      name: 'Convert a compound sentence',
      input: 'mama gedhara yanavaa ban hithuvata vadaa godak raee velaa.',
      expected: 'මම ගෙදර යනවා බන් හිතුවට වඩා ගොඩක් රෑ වෙලා.',
      category: 'Daily language usage',
      grammar: 'Compound sentence',
      length: 'S'
    },
    
   
    {
      tcId: 'Pos_Fun_006',
      name: 'Convert a short daily greeting phrase',
      input: 'ammoo saeehena kaalekinne hambunee komadha ithin',
      expected: 'අම්මෝ සෑහෙන කාලෙකින්නෙ හම්බුනේ කොමද ඉතින්',
      category: 'Daily language usage',
      grammar: 'Complex sentence',
      length: 'M'
    },
    
    
    {
      tcId: 'Pos_Fun_007',
      name: 'Responses',
      input: 'hari, mama karannam ammaa.',
      expected: 'හරි, මම කරන්නම් අම්මා.',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_008',
      name: 'Convert interrogative sentence',
      input: 'hiruni dhaekkadha apee tiktok video eka eka supiri nedha ?',
      expected: 'හිරුනි දැක්කද අපේ tiktok video එක එක සුපිරි නේද ?',
      category: 'Daily language usage',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_009',
      name: 'Repeated word emphasis',
      input: 'man coding lessons tika baeluvaa tika tika ....... thava thiyanava ithin',
      expected: 'man coding lessons ටික බැලුවා ටික ටික ....... තව තියනව ඉතින්',
      category: 'Greeting / request / response',
      grammar: 'Interrogative (question)',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_010',
      name: 'Tense variation future',
      input: 'api next week eke ayiyage manamaali balanna yanavaa',
      expected: 'අපි next week eke අයියගෙ මනමාලි බලන්න යනවා',
      category: 'Daily language usage',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_011',
      name: 'Tense variation future',
      input: 'heta apee malli AL exam ekata yanavaa.',
      expected: 'හෙට අපේ මල්ලි AL exam එකට යනවා.',
      category: 'Greeting / request / response',
      grammar: 'Imperative (command)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_012',
      name: 'Sinhala output updates automatically in real-time',
      input: 'oyaa adha office giya naedhdha kiyala mata ahanna hithuna mokadha uba godak busy vidhihatane hitiyee.',
      expected: 'ඔයා අද office ගිය නැද්ද කියල මට අහන්න හිතුන මොකද උබ ගොඩක් busy විදිහටනෙ හිටියේ.',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_013',
      name: 'Convert exclamatory sentence',
      input: 'oyaa saamaanya vidhihata kaalayak gaththoth oyaata hithenne naethi dheevaluth hithala balanna puluvan mokadha jiivithayata adhaala hodha thiiranaya ganna kalaya hari vaedhagath ',
      expected: 'ඔයා සාමාන්ය විදිහට කාලයක් ගත්තොත් ඔයාට හිතෙන්නෙ නැති දේවලුත් හිතල බලන්න පුලුවන් මොකද ජීවිතයට අදාල හොද තීරනය ගන්න කලය හරි වැදගත් ',
      category: 'Greeting / request / response',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_014',
      name: 'Clear input field',
      input: 'man pansal yano',
      expected: 'man පන්සල් යනො',
      category: 'Daily language usage',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_015',
      name: 'Day today conversitions.',
      input: 'kaanthi akkaa heta ennadha aehuva dharuva ekka ara sahanaadhaara dhenava kiyapu eka ganna ',
      expected: 'කාන්ති අක්කා හෙට එන්නද ඇහුව දරුව එක්ක අර සහනාදාර දෙනව කියපු එක ගන්න',
      category: 'Daily language usage',
      grammar: 'Future tense',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_016',
      name: 'Convert a compound sentence',
      input: 'handhiye traffic light eka gaava edhaa uu idhiya dhaekke',
      expected: 'හන්දියෙ traffic light එක ගාව එදා ඌ ඉදිය දැක්කෙ',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_017',
      name: 'Convert interrogative sentence',
      input: 'podi ayya ekka kolaba yanava badu vagayak ganna kiiyata enna puluvan veidha dhan naee oyaa mokadha kiyanne hetama enavadha ???',
      expected: 'පොඩි අය්ය එක්ක කොලබ යනව බඩු වගයක් ගන්න කීයට එන්න පුලුවන් වේද දන් නෑ ඔයා මොකද කියන්නෙ හෙටම එනවද ???',
      category: 'Daily language usage',
      grammar: 'Negation (negative form)',
      length: 'S'
    },
  
    {
      tcId: 'Pos_Fun_018',
      name: 'Sinhala output updates automatically in real-time',
      input: 'adoo vaedak karanna gaththanam eeka hariyata karapanko bQQ. ',
      expected: 'අඩෝ වැඩක් කරන්න ගත්තනම් ඒක හරියට කරපන්කො බං. ',
      category: 'Daily language usage',
      grammar: 'Plural form',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_019',
      name: 'Output font rendering',
      input: 'heta ape miss eyidha sure ekatama?',
      expected: 'හෙට ape miss එයිද sure එකටම?',
      category: 'Word combination / phrase pattern',
      grammar: 'Simple sentence',
      length: 'S'
    },
    
    {
      tcId: 'Pos_Fun_020',
      name: 'Tooltip shows full text',
      input: 'sapuni, heta chaamara gedhara yanava kivva. oyaata heta BOC ATM eka gaavata enna puluvanda ahuva 10.45am vage.',
      expected: 'සපුනි, හෙට චාමර ගෙදර යනව කිව්ව. ඔයාට හෙට BOC ATM එක ගාවට එන්න පුලුවන්ඩ අහුව 10.45am වගෙ.',
      category: 'Mixed Singlish + English',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Pos_Fun_021',
      name: 'Normal sentence',
      input: 'class ekata log vena URL eka incorrect kiyla vaetenvane haemavelema aeyi e?',
      expected: 'class එකට log වෙන URL එක incorrect කිය්ල වැටෙන්වනෙ හැමවෙලෙම ඇයි එ?',
      category: 'Names / places / common English words',
      grammar: 'Past tense',
      length: 'S'
    },

    {
      tcId: 'Pos_Fun_022',
      name: 'Clear input field',
      input: 'mata sandwich ekak oni',
      expected: 'මට sandwich එකක් ඔනි',
      category: 'Punctuation / numbers',
      grammar: 'Simple sentence',
      length: 'S'
    }
  ],
  








  
  negative: [
    {
      tcId: 'Neg_Fun_001',
      name: 'Missing space between words',
      input: 'mamagedharayanavaa',
      expected: 'මම ගෙදර යනවා',
      category: 'Typographical error handling',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_002',
      name: 'Joined compound words',
      input: 'apihetahambemudhayaalu',
      expected: 'අපි හෙට හම්බෙමුද යාලු',
      category: 'Typographical error handling',
      grammar: 'Future tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_003',
      name: 'Mixed spacing issues',
      input: 'mata     oonee  oyagee dheevalgana katha      karanna',
      expected: 'මට ඕනේ ඔයගේ දේවල්ගන කත කරන්න',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_004',
      name: 'Line break in sentence',
      input: 'මම යනවා',
      expected: 'මම \nයනව',
      category: 'Formatting (spaces / line breaks / paragraph)',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_005',
      name: 'Informal slang phrase',
      input: 'machaang maath kaemathii bn',
      expected: 'මචාන්ග් මාත් කැමතී බ්න්',
      category: 'Slang / informal language',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_006',
      name: 'Colloquial expression',
      input: 'adooo mokakkdha mee velaa thiyenne',
      expected: 'අඩෝඔ මොකක්ක්ද මේ වෙලා තියෙන්නෙ',
      category: 'Slang / informal language',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_007',
      name: 'Mixed English with errors',
      input: 'man kohomadha ehema karannee but I want',
      expected: 'man කොහොමද එහෙම කරන්නේ but I want',
      category: 'Mixed Singlish + English',
      grammar: 'Past tense',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_008',
      name: 'Abbreviation in sentence',
      input: 'eii mk',
      expected: 'එඊ MK',
      category: 'Names / places / common English words',
      grammar: 'Simple sentence',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_009',
      name: 'Question with spacing error',
      input: 'matasandwichekakoni',
      expected: 'මට sandwich එකක් ඔනි',
      category: 'Typographical error handling',
      grammar: 'Interrogative (question)',
      length: 'S'
    },
    {
      tcId: 'Neg_Fun_010',
      name: 'Complex slang statement',
      input: 'man pansal yano bro',
      expected: 'man පන්සල් යනො bro',
      category: 'Slang / informal language',
      grammar: 'Imperative (command)',
      length: 'S'
    }
  ],
  ui: {
    tcId: 'Pos_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama biima ekak gannavvaa ',
    partialInput: 'mama bii',
    expectedFull: 'මම බීම එකක් ගන්නව්වා ',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  },
  ui: {
    tcId: 'Neg_UI_001',
    name: 'Real-time translation updates as typing',
    input: 'mama kaeema kannavaa',
    partialInput: 'mama bii',
    expectedFull: 'මම කෑම කන්නවා',
    category: 'Usability flow',
    grammar: 'Present tense',
    length: 'S'
  }
};
  


// Helper Functions
class TranslatorPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToSite() {
    await this.page.goto(CONFIG.url);
    await this.page.waitForLoadState('networkidle');
    await this.page.waitForTimeout(CONFIG.timeouts.pageLoad);
  }

  async getInputField() {
    return this.page.getByRole('textbox', { name: CONFIG.selectors.inputField });
  }

  async getOutputField() {
    return this.page
      .locator(CONFIG.selectors.outputContainer)
      .filter({ hasNot: this.page.locator('textarea') })
      .first();
  }

  async clearAndWait() {
    const input = await this.getInputField();
    await input.clear();
    await this.page.waitForTimeout(CONFIG.timeouts.afterClear);
  }

  async typeInput(text) {
    const input = await this.getInputField();
    await input.fill(text);
  }

  async waitForOutput() {
    await this.page.waitForFunction(
      () => {
        const elements = Array.from(
          document.querySelectorAll('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap')
        );
        const output = elements.find(el => {
          const isInputField = el.tagName === 'TEXTAREA' || el.getAttribute('role') === 'textbox';
          return !isInputField && el.textContent && el.textContent.trim().length > 0;
        });
        return output !== undefined;
      },
      { timeout: 10000 }
    );
    await this.page.waitForTimeout(CONFIG.timeouts.translation);
  }

  async getOutputText() {
    const output = await this.getOutputField();
    const text = await output.textContent();
    return text.trim();
  }

  async performTranslation(inputText) {
    await this.clearAndWait();
    await this.typeInput(inputText);
    await this.waitForOutput();
    return await this.getOutputText();
  }
}

// Test Suite
test.describe('SwiftTranslator - Singlish to Sinhala Conversion Tests', () => {
  let translator;

  test.beforeEach(async ({ page }) => {
    translator = new TranslatorPage(page);
    await translator.navigateToSite();
  });

  // Positive Functional Tests
  test.describe('Positive Functional Tests', () => {
    for (const testCase of TEST_DATA.positive) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // Negative Functional Tests
  test.describe('Negative Functional Tests', () => {
    for (const testCase of TEST_DATA.negative) {
      test(`${testCase.tcId} - ${testCase.name}`, async () => {
        const actualOutput = await translator.performTranslation(testCase.input);
        expect(actualOutput).toBe(testCase.expected);
        await translator.page.waitForTimeout(CONFIG.timeouts.betweenTests);
      });
    }
  });

  // UI Test
  test.describe('UI Functionality Tests', () => {
    test(`${TEST_DATA.ui.tcId} - ${TEST_DATA.ui.name}`, async ({ page }) => {
      const translator = new TranslatorPage(page);
      const input = await translator.getInputField();
      const output = await translator.getOutputField();

      await translator.clearAndWait();
      
      // Type partial input
      await input.pressSequentially(TEST_DATA.ui.partialInput, { delay: 150 });
      
      // Wait for partial output
      await page.waitForTimeout(1500);
      
      // Verify partial translation appears
      let outputText = await output.textContent();
      expect(outputText.trim().length).toBeGreaterThan(0);
      
      // Complete typing
      await input.pressSequentially(TEST_DATA.ui.input.substring(TEST_DATA.ui.partialInput.length), { delay: 150 });
      
      // Wait for full translation
      await translator.waitForOutput();
      
      // Verify full translation
      outputText = await translator.getOutputText();
      expect(outputText).toBe(TEST_DATA.ui.expectedFull);
      
      await page.waitForTimeout(CONFIG.timeouts.betweenTests);
    });
  });
});
