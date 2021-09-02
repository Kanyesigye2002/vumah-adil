import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function HostGuide() {
  const nav = `
  <p style="line-height: 150%; orphans: 1"><!--[if supportFields]><span
  lang=EN-US style='font-size:16.0pt;line-height:150%;font-family:"Times New Roman",serif;
  mso-fareast-font-family:"Times New Roman";color:#2F5496;mso-ansi-language:EN-US'><span
  style='mso-element:field-begin'></span></span><span lang=EN-GB
  style='font-family:"Times New Roman",serif'><span
  style='mso-spacerun:yes'>�</span>TOC &quot;1-3&quot; </span><span
  lang=EN-US style='font-size:16.0pt;line-height:150%;font-family:"Times New Roman",serif;
  mso-fareast-font-family:"Times New Roman";color:#2F5496;mso-ansi-language:EN-US'><span
  style='mso-element:field-separator'></span></span><![endif]--><font face="Times New Roman, serif"><span lang="en-GB"><a href="#_Toc76639641">1.</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">PRIVACY
  POLICY</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639641 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  2</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600340031000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639642"><font face="Times New Roman, serif"><span lang="en-GB">1.1</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">THE
  TYPES OF INFORMATION WE
  COLLECT:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639642 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  2</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600340032000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639643"><font face="Times New Roman, serif"><span lang="en-GB">1.2</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">INFORMATION
  COLLECTED AND STORED AUTOMATICALLY:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639643 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  3</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600340033000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639644"><font face="Times New Roman, serif"><span lang="en-GB">1.3</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">INFORMATION
  COLLECTED FROM
  THIRD-PARTY:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639644 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  5</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600340034000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639645"><font face="Times New Roman, serif"><span lang="en-GB">1.3.1</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">THIRD-PARTY
  IN-VEHICLE
  DEVICES:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639645 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  5</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600340035000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639646"><font face="Times New Roman, serif"><span lang="en-GB">1.3.2</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">BACKGROUND
  CHECK
  SERVICES:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639646 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  5</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600340036000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639647"><font face="Times New Roman, serif"><span lang="en-GB">1.3.3</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">OTHER
  SOURCES:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639647 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  5</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600340037000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639648"><font face="Times New Roman, serif"><span lang="en-GB">1.4</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">FOR
  RESEARCH AND
  DEVELOPMENT:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639648 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  5</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600340038000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639649"><font face="Times New Roman, serif"><span lang="en-GB">1.5</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">FOR
  MARKETING AND
  ADVERTISING:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639649 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  6</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600340039000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639650"><font face="Times New Roman, serif"><span lang="en-GB">1.6</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">HOW
  WE DISCLOSE YOUR PERSONAL
  INFORMATION:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639650 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  6</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600350030000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639651"><font face="Times New Roman, serif"><span lang="en-GB">1.7</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">YOUR
  PREFERENCES AND
  CHOICES:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639651 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  8</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600350031000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639652"><font face="Times New Roman, serif"><span lang="en-GB">1.8</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">INTEREST-BASED
  ADVERTISING
  CHOICES:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639652 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  8</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600350032000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639653"><font face="Times New Roman, serif"><span lang="en-GB">1.9</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">SECURITY:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639653 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  9</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600350033000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639654"><font face="Times New Roman, serif"><span lang="en-GB">1.9.1</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">WHAT
  ARE YOUR DATA PROTECTION
  RIGHTS?</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639654 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  9</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600350034000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639655"><font face="Times New Roman, serif"><span lang="en-GB">1.10</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">OTHER
  IMPORTANT
  INFORMATION:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639655 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  9</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600350035000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639656"><font face="Times New Roman, serif"><span lang="en-GB">1.10.1</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">CROSS
  BORDER
  TRANSFER:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639656 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  10</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600350036000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639657"><font face="Times New Roman, serif"><span lang="en-GB">1.10.2</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">SENSITIVE
  INFORMATION:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639657 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  10</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600350037000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639658"><font face="Times New Roman, serif"><span lang="en-GB">1.10.3</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">CHILDREN:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639658 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  10</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600350038000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639659"><font face="Times New Roman, serif"><span lang="en-GB">1.10.4</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">THIRD-PARTY
  PRIVACY
  PRACTICES:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639659 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  10</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600350039000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639660"><font face="Times New Roman, serif"><span lang="en-GB">1.10.5</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">TRANSLATIONS:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639660 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  10</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600360030000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639661"><font face="Times New Roman, serif"><span lang="en-GB">1.11</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">CHANGES
  TO THIS PRIVACY
  POLICY:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639661 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  11</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600360031000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639662"><font face="Times New Roman, serif"><span lang="en-GB">1.12</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">CONTACTING
  US:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639662 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  11</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600360032000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639663"><font face="Times New Roman, serif"><span lang="en-GB">1.13</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">INFORMATION
  FOR EUROPEAN
  USERS:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639663 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  11</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600360033000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639664"><font face="Times New Roman, serif"><span lang="en-GB">1.13.1</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">CONTROLLER:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639664 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  11</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600360034000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639665"><font face="Times New Roman, serif"><span lang="en-GB">1.13.2</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">LEGAL
  BASES FOR
  PROCESSING:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639665 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  12</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600360035000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639666"><font face="Times New Roman, serif"><span lang="en-GB">1.13.3</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">USE
  FOR NEW
  PURPOSES:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639666 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  12</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600360036000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639667"><font face="Times New Roman, serif"><span lang="en-GB">1.13.4</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">RETENTION:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639667 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  12</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600360037000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639668"><font face="Times New Roman, serif"><span lang="en-GB">1.15</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">ADDITIONAL
  RELATED
  TERMS:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639668 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  12</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600360038000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639669"><font face="Times New Roman, serif"><span lang="en-GB">1.15.1</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">RECOVERY:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639669 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  12</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600360039000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639670"><font face="Times New Roman, serif"><span lang="en-US">1.15.2</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-US">VEHICLES
  THAT GO
  MISSING:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639670 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  12</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600370030000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639671"><font face="Times New Roman, serif"><span lang="en-GB">1.16</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">COMMON
  ARRANGEMENTS</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639671 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  13</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600370031000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639672"><font face="Times New Roman, serif"><span lang="en-GB">1.16.1</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">TERMINATION:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639672 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  13</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600370032000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639673"><font face="Times New Roman, serif"><span lang="en-US">1.16.2</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-US">NO
  VEHICLE TRANSFER OR
  ASSIGNMENT:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639673 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  13</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600370033000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639674"><font face="Times New Roman, serif"><span lang="en-US">1.16.3</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-US">DISCLAIMERS:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639674 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  13</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600370034000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639675"><font face="Times New Roman, serif"><span lang="en-GB">1.16.4</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">LIMITATION
  OF RESPONSIBILITY AND
  WAIVER:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639675 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  14</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600370035000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639676"><font face="Times New Roman, serif"><span lang="en-GB">1.16.5</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">COMPENSATION:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639676 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  15</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600370036000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639677"><font face="Times New Roman, serif"><span lang="en-GB">1.16.6</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">LIQUIDATED
  DAMAGES:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639677 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  16</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600370037000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639678"><font face="Times New Roman, serif"><span lang="en-GB">1.16.7</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">VUMAH
  IS NOT A RENTAL CAR
  COMPANY:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639678 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  17</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600370038000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639679"><font face="Times New Roman, serif"><span lang="en-GB">1.16.8</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">ROUNDING
  OFF:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639679 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  17</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600370039000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639680"><font face="Times New Roman, serif"><span lang="en-GB">1.16.9</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">TRANSLATIONS:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639680 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  17</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600380030000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639681"><font face="Times New Roman, serif"><span lang="en-GB">1.16.10</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">SEVERABILITY
  AND
  NON-WAIVER:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639681 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  17</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600380031000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639682"><font face="Times New Roman, serif"><span lang="en-GB">1.16.11</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">COMMON
  NOTICE:</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639682 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  17</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600380032000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639683"><font face="Times New Roman, serif"><span lang="en-GB">1.17</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">COOKIES</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639683 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  18</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600380033000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639684"><font face="Times New Roman, serif"><span lang="en-GB">1.17.1</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">HOW
  DO WE USE
  COOKIES?</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639684 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  18</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600380034000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639685"><font face="Times New Roman, serif"><span lang="en-GB">1.17.2</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">WHAT
  TYPES OF COOKIES DO WE
  USE?</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639685 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  18</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600380035000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639686"><font face="Times New Roman, serif"><span lang="en-GB">1.17.3</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">HOW
  TO MANAGE
  COOKIES</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639686 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  19</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600380036000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639687"><font face="Times New Roman, serif"><span lang="en-GB">1.18</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">PRIVACY
  POLICIES OF OTHER
  WEBSITES</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639687 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  19</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600380037000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639688"><font face="Times New Roman, serif"><span lang="en-GB">1.19</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">CHANGES
  TO OUR PRIVACY
  POLICY</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639688 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  19</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600380038000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639689"><font face="Times New Roman, serif"><span lang="en-GB">1.20</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">HOW
  TO CONTACT
  US</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639689 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  19</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600380039000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>
  <p style="line-height: 150%; orphans: 1"><a href="#_Toc76639690"><font face="Times New Roman, serif"><span lang="en-GB">1.21</span></font><span style="text-decoration: none"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;
  </span></span><font face="Times New Roman, serif"><span lang="en-GB">HOW
  TO CONTACT THE APPROPRIATE
  AUTHORITY</span></font><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none">.<!--[if supportFields]><span
  style='color:windowtext;mso-no-proof:yes;text-decoration:none;text-underline:
  none'><span style='mso-element:field-begin'></span> PAGEREF _Toc76639690 <span
  style='mso-element:field-separator'></span></span><![endif]-->
  19</span></span></span></span></a><span style="text-decoration: none"><span lang="en-GB"><span style="text-decoration: none"><span style="text-decoration: none"><!--[if gte mso 9]><xml>
   <w:data>08D0C9EA79F9BACE118C8200AA004BA90B02000000080000000D0000005F0054006F006300370036003600330039003600390030000000</w:data>
  </xml><![endif]--><!--[if supportFields]><span style='color:windowtext;
  mso-no-proof:yes;text-decoration:none;text-underline:none'><span
  style='mso-element:field-end'></span></span><![endif]--></span></span></span></span></p>`;
  const tos = `
  <h1 align="center" style="margin-left: 0.5in; text-indent: -0.25in; line-height: 150%"><a name="_Toc59980500"></a><a name="_Toc76639641"></a>
  <font face="Times New Roman, serif"><span lang="en-GB">1.</span></font><span style="font-variant: normal"><font face="Times New Roman, serif"><span lang="en-GB">&nbsp;&nbsp;&nbsp;
  </span></font></span><font face="Times New Roman, serif"><span lang="en-GB">PRIVACY
  POLICY</span></font></h1>
  <p class="msonormal" style="line-height: 150%">&nbsp;</p>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">At
  Vumah, we respect your privacy. We implemented this privacy policy
  (&quot;Privacy Policy&quot;) to explain to you how we use and protect
  the personal information we may gather from and about our customers
  by means of our websites, mobile applications, online booking widgets
  (i.e. online booking applications run by our third-party partners
  such as hotel providers, airlines, etc), our corporate, rental and
  sales locations, and from third-party sources. By using our websites
  or mobile applications, you consent to the collection, use and
  disclosure of your information, as described in this Privacy Policy.</font></font></p>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980501"></a><a name="_Toc76639642"></a>
  <font face="Times New Roman, serif">1.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  THE TYPES OF INFORMATION WE COLLECT:</font></h2>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">You
  may provide us with certain information in connection with a
  transaction or in your interactions with our websites. When you are
  asked to provide personal information, you may decline. If you choose
  not to provide the information, you may not be able to use some
  products or services. The personal information that we may collect
  includes:</font></font></p>
  <p align="justify" style="margin-left: 1in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(i)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Account
  data: your name, contact information, driving license number and
  expiry date, emergency contact information and date of birth;</span></font></font></p>
  <p align="justify" style="margin-left: 1in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(ii)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Identity
  verification data: Vumah Car Rentals rental information, including
  the location of where the Vumah Car Rentals vehicle is rented, date
  of rentals, type of rental and your preferences;</span></font></font></p>
  <p align="justify" style="margin-left: 1in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(iii)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Payment
  data: your credit card details, online user accounts details,
  membership/corporate ID numbers, passport information and frequent
  flyer or travel partner affiliations;</span></font></font></p>
  <p align="justify" style="margin-left: 1in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(iv)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Profile
  data: information that you provide regarding your marketing
  preferences or in the course of participating in surveys or
  promotional offers; includes interests, preferences, feedback and
  survey responses.</span></font></font></p>
  <p align="justify" style="margin-left: 1in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(v)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Photographs
  that you submit of you and your driving license or your receipts
  through the camera features available on some of our mobile
  applications and websites;</span></font></font></p>
  <p align="justify" style="margin-left: 1in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(vi)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Financial
  information that may be necessary to facilitate the lease of a rental
  vehicle.</span></font></font></p>
  <p align="justify" style="margin-left: 1in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(vii)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Additional
  contact information about you that we may obtain through third
  parties with whom we do business (e.g. travel agents, Car Sales lead
  providers or similar providers).</span></font></font></p>
  <p align="justify" style="margin-left: 1in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(viii)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Communication
  data: includes preferences in receiving marketing from us and our
  third parties and preferences in receiving other communications from
  us and our third parties.</span></font></font></p>
  <p align="justify" style="margin-left: 1in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980502"></a><a name="_Toc76639643"></a>
  <font face="Times New Roman, serif">1.2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  INFORMATION COLLECTED AND STORED AUTOMATICALLY:</font></h2>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">By
  visiting our websites, certain information may be automatically
  provided to us by your computer. For each visitor to our websites,
  our web servers automatically recognize the visitor&rsquo;s domain
  name or IP address. An IP address is a number assigned to your
  computer when you connect to the Internet. </font></font>
  </p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Courier New"><span lang="en-GB">o</span></font><span style="font-variant: normal"><font face="Courier New"><span lang="en-GB">&nbsp;&nbsp;
  </span></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB"><i><u><b>Usage
  data: </b></u></i></span></font></font>
  </p>
  <p lang="en-GB" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">As
  part of the protocol of the Internet, web servers can identify your
  computer by its IP address. In addition, we may collect your browser
  type and operating system as well as your Internet service provider
  (ISP), referring and exit pages, date and time stamp and/or click
  stream data. </font></font>
  </p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Courier New"><span lang="en-GB">o</span></font><span style="font-variant: normal"><font face="Courier New"><span lang="en-GB">&nbsp;&nbsp;
  </span></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB"><i><u><b>Location
  data:</b></u></i></span></font></font></p>
  <p lang="en-GB" class="msonormal" align="justify" style="margin-left: 0.5in; text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">As
  part of our safety protocols for our guests and in a bid to
  adequately monitor our hosts, we collect your location data
  automatically.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Courier New"><span lang="en-GB">o</span></font><span style="font-variant: normal"><font face="Courier New"><span lang="en-GB">&nbsp;&nbsp;
  </span></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB"><i><u><b>Device
  data:</b></u></i></span></font></font></p>
  <p lang="en-GB" class="msonormal" align="justify" style="margin-left: 0.5in; text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">We
  collect similar information when visiting our websites with your
  mobile device, including mobile device brand, model, mobile operation
  system and carrier. Except as otherwise explained in this policy, we
  may combine the non-personal information that we collect from you (as
  described above and as described below, under 'Cookies &amp; Pixel
  Tracking') with your personal information in order to tailor our
  websites and enhance your online experience by saving your
  preferences and/or to help identify site features, advertisements and
  offers that may be of interest to you.</font></font></p>
  <p class="msonormal" align="justify" style="margin-left: 0.5in; text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <p class="msonormal" align="justify" style="margin-left: 0.5in; text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Courier New"><font size="3" style="font-size: 12pt"><span lang="en-GB">o</span></font></font><span style="font-variant: normal"><font face="Courier New"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB"><i><u><b>Trip
  data:</b></u></i></span></font></font></p>
  <p lang="en-GB" class="msonormal" align="justify" style="margin-left: 0.5in; text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">All
  information on the details of the trip would also be recorded in
  conjunction with the location data.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Courier New"><font size="3" style="font-size: 12pt"><span lang="en-GB">o</span></font></font><span style="font-variant: normal"><font face="Courier New"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB"><i><u><b>Cookies
  and similar data:</b></u></i></span></font></font></p>
  <p lang="en-GB" class="msonormal" align="justify" style="margin-left: 0.5in; text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Our
  partners use cookies, pixel tags, tags, HTML 5 storage and similar
  technologies on most of our sites and in promotional emails which we
  may send to you. We use them to monitor and understand your use of
  our websites and services; improve your user experience and enable
  personalized features and content; optimize our advertisements and
  marketing and see which email promotions were of interest to you; and
  assist third-party advertising companies to serve ads on our behalf
  across the Internet. At this time, our websites do not respond to
  automated signals regarding tracking mechanisms, including 'do not
  track' instructions from your browser. However, you have other
  options for preventing or limiting the use of cookies and similar
  technologies</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980503"></a><a name="_Toc76639644"></a>
  <font face="Times New Roman, serif">1.3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  INFORMATION COLLECTED FROM THIRD-PARTY:</font></h2>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Third-party
  services: We collect Personal Data about you when you provide such
  Personal Data directly to us, when third parties such as our business
  partners or service providers provide us with Personal Data about
  you, or when Personal Data about you is automatically collected in
  connection with your use of their Services.</span></font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980504"></a><a name="_Toc76639645"></a>
  <font face="Times New Roman, serif">1.3.1&nbsp;&nbsp;&nbsp;
  THIRD-PARTY IN-VEHICLE DEVICES:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">If
  you interact with a third-party service when using our Services, such
  as if you use a third-party service or device to log-in to our
  Services (e.g, Facebook Connect), or if you share content from our
  Services through such third-party service, the applicable third-party
  service will send us certain Personal Data (specifically your first
  name, ID, token and profile picture URL) if the third-party service
  and your account settings allow such sharing. Specifically, this
  Personal Data permits us to create and manage user profiles and sync
  your progress when you connect to Facebook through the Services. The
  Personal Data we receive will depend on the policies and your account
  settings with the applicable third-party service. We process this
  Personal Data based on our legitimate business interest of
  personalizing and optimizing the Services to improve user experience.</font></font></p>
  <p align="justify" style="margin-bottom: 0in; line-height: 150%">&nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980505"></a><a name="_Toc76639646"></a>
  <font face="Times New Roman, serif">1.3.2&nbsp;&nbsp;&nbsp;
  BACKGROUND CHECK SERVICES:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">We
  collect some data from fact check companies, meaning people who have
  empirical data about whom we are performing services. Examples of
  Subjects' activities from which we collect data include completing
  forms about themselves, acknowledging disclosures and notices, giving
  authorization and consent to perform background checks, requesting
  disclosure of information in our files, and requesting a
  reinvestigation of that information.</font></font></p>
  <p align="justify" style="margin-bottom: 0in; line-height: 150%">&nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980506"></a><a name="_Toc76639647"></a>
  <font face="Times New Roman, serif">1.3.3&nbsp;&nbsp;&nbsp; OTHER
  SOURCES:</font></h3>
  <p lang="en-GB" align="justify" style="margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Any
  other source at our discretion.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980507"></a><a name="_Toc76639648"></a>
  <font face="Times New Roman, serif">1.4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  FOR RESEARCH AND DEVELOPMENT:</font></h2>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">We
  gather data in connection with other business purposes including,
  without limitation, service quality, business management and
  operation, risk assessment, security, fraud and crime
  prevention/detection, monitoring, research and analysis, and dispute
  resolution.</font></font></p>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980508"></a><a name="_Toc76639649"></a>
  <font face="Times New Roman, serif">1.5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  FOR MARKETING AND ADVERTISING:</font></h2>
  <p align="justify" style="margin-left: 0.75in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(i)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB"><i><u><b>Direct
  marketing: </b></u></i></span></font></font>
  </p>
  <p align="justify" style="margin-left: 0.75in; margin-bottom: 0in; line-height: 150%; text-decoration: none">
  &nbsp;</p>
  <p lang="en-GB" align="justify" style="margin-left: 0.75in; text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">We
  collect data on you to calibrate our services to suit your particular
  interests. This would be seen on our landing pages and other parts of
  our website; mails and push notifications.</font></font></p>
  <p align="justify" style="margin-left: 0.75in; text-indent: 0.25in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <p align="justify" style="margin-left: 0.75in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(ii)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB"><i><u><b>Interest-based
  advertising:</b></u></i></span></font></font></p>
  <p lang="en-GB" class="msonormal" align="justify" style="margin-left: 0.75in; text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">We
  collect data for retargeting/advertising cookies collect data about
  your online activity and identify your interests so that we can
  provide advertising that we believe is relevant to you.</font></font></p>
  <p lang="en-GB" class="msonormal" align="justify" style="margin-left: 0.75in; text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Most
  browsers automatically accept cookies but have an option for blocking
  or deleting cookies, which will prevent your browser from accepting
  new cookies, as well as (depending on the sophistication of your
  browser software) allow you to decide on acceptance of each new
  cookie in a variety of ways. You can usually access these options
  through the &ldquo;Settings&rdquo; or similar menu in your browser.&nbsp;
  For more information about cookies, including how to see what cookies
  have been set and how to manage and delete cookies, visit
  www.aboutcookies.org or www.allaboutcookies.org.&nbsp; Please note
  that if you block or delete cookies, some portions of the Services
  may not work properly. In some cases, cookies may enable us to
  aggregate certain information with other Personal Data we collect and
  hold about you.</font></font></p>
  <p class="msonormal" align="justify" style="margin-left: 0.75in; text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980509"></a><a name="_Toc76639650"></a>
  <font face="Times New Roman, serif">1.6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  HOW WE DISCLOSE YOUR PERSONAL INFORMATION:</font></h2>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Profiles,
  listings, and other public information: We may disclose the
  information that we collect from and about you to our subsidiaries
  for the purpose of providing the transactions you have requested and
  for marketing purposes. In addition to those stated within this
  Policy, information may be disclosed to, accessed by or used by us,
  our affiliates, emergency service providers, others who may assist in
  responding to an accident, or those with whom we have a legal or
  contractual obligation to provide such data. Our affiliates and our
  subsidiary employees in our IT, marketing, operations and customer
  service divisions may use your information, as described in this
  Policy. </span></font></font>
  </p>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Sharing
  between hosts and guests: to enforce the terms of any rental
  agreement or our websites&rsquo; terms and conditions; to process
  your transaction with our subsidiaries, affiliates or
  licensee/franchisee located in the country in which you place your
  reservation; or if the rights of another individual is violated.</span></font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Service
  providers: We may disclose your personal information to third-party
  service providers (such as a payment processor to bill you for goods
  or services, an email provider to send email communications to you on
  our behalf, or the provider of our live chat feature in order to
  offer you customer service). These service providers may be located
  in a country different from your country of residence, such as the
  United States or a European Union member country. These service
  providers are contractually required to maintain the confidentiality
  and security of your information. However, your information may be
  accessible to US or EU authorities in accordance with applicable
  laws.</span></font></font></p>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Third-party
  platforms and social media networks: We may also share aggregated or
  de-identified information about our customers with our advertising
  and marketing partners, and third-party media properties, including
  social media sites to allow them to send targeted advertising
  messages on our behalf. With your prior notice and consent, we may
  share your name and email address with our co-branded partners and
  affiliates in order to provide the services you have requested and
  for marketing purposes. If you wish to stop receiving promotional
  communications from these third parties, please contact the third
  party.</span></font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Professional
  advisors: for administrative, technical support or other business
  purposes to facilitate our transactions with you (i.e. for your
  insurance replacement, corporate rental or through one of our
  partners), analyse our data, conduct mobile analytics services or to
  maintain and improve our services (subject to confidentiality
  agreements as appropriate)</span></font></font></p>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Business
  transfers: Personal information may also be subject to transfer to
  another company in the event of a transfer, change of ownership,
  reorganization or assignment of all or part of our Services, our
  subsidiaries/affiliated companies or our assets. This will occur
  provided that the parties have entered into an agreement under which
  the collection, use and disclosure of the information is limited to
  those purposes of the business transaction, including a determination
  whether or not to proceed with the business transaction. You will be
  notified via email or a prominent notice on our websites of any such
  change in ownership or control of your personal information.</span></font></font></p>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Responding
  to legal requests, preventing harm, and protecting our rights: we may
  release your information when required by law or in response to legal
  process; without legal process in response to a request from law
  enforcement relating to a criminal investigation; to protect our
  rights, privacy, safety or property, or of the public;</span></font></font></p>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Our
  websites may contain links to other websites (such as those of our
  marketing partners or advertisers), which may have privacy policies
  that differ from our own. We are not responsible for the activities
  and practices that take place on these websites. Accordingly, we
  recommend that you review the privacy policy posted on any website
  that you may access through our 2.4 </font></font>
  </p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980510"></a><a name="_Toc76639651"></a>
  <font face="Times New Roman, serif"><span lang="en-GB">1.7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  YOUR PREFERENCES AND CHOICES:</span></font> 
  </h2>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Communication
  preferences: we only store the information that we need according to
  the purposes described above. As a personal information provider, you
  always have the right to:</span></font></font></p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&middot;</span></font></font><span style="font-variant: normal"><font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-US">Opting
  out of marketing communications: this involves the right to
  unsubscribe from our mailing lists; turn off our push communications
  and other communication measures we have put in place.</span></font></font></p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&middot;</span></font></font><span style="font-variant: normal"><font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-US">Correct
  and update the information you have submitted</span></font></font></p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&middot;</span></font></font><span style="font-variant: normal"><font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-US">Close
  your account with us at any time as long as you provide the necessary
  security details for us to ensure it is you and not a fraudulent
  third party</span></font></font></p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&middot;</span></font></font><span style="font-variant: normal"><font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-US">Access:
  you have the right to access the information you have submitted at
  any time for perusal or usage according to this terms and condition
  agreement.</span></font></font></p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&middot;</span></font></font><span style="font-variant: normal"><font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-US">Location
  data: you can visit our database that contains all our stored
  location data.</span></font></font></p>
  <p align="justify" style="margin-bottom: 0in; line-height: 150%">&nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980511"></a><a name="_Toc76639652"></a>
  <font face="Times New Roman, serif">1.8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  INTEREST-BASED ADVERTISING CHOICES:</font></h2>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&middot;</span></font></font><span style="font-variant: normal"><font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-US">Blocking
  cookies in your browser: you have the right to disable cookies on
  your browser for our website to reduce targeted ads. This can be done
  by Going to Menu -&gt; Settings; Select Site settings; Select
  Cookies; To block Cookies entirely, touch the setting so that the
  switch moves left and turns from blue to grey.</span></font></font></p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&middot;</span></font></font><span style="font-variant: normal"><font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-US">Blocking
  advertising ID use in your mobile settings: you have the right to do
  this if you feel the ads violate your privacy; track your shopping
  habits; help spread advertising; help spread disinformation</span></font></font></p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&middot;</span></font></font><span style="font-variant: normal"><font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-US">Using
  privacy plug-ins or browsers: you can use plug-ins for better privacy
  by installing suitable pop-up blocker user can evade such risks and
  keep their personal data safe and secure.</span></font></font></p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&middot;</span></font></font><span style="font-variant: normal"><font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-US">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-US">Advertising
  industry opt-out tools: you have the right to use these tools that
  will enable you to express an opt out from use of your personal
  information, including its use for interest-based advertising, by us
  and third-party partners that collect data across sites. </span></font></font>
  </p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980512"></a><a name="_Toc76639653"></a>
  <font face="Times New Roman, serif">1.9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  SECURITY:</font></h2>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">To
  comply with law: there is certain information that we are obliged by
  law to gather so as to ensure social responsibility and comply with
  data privacy laws. These data will be gathered with your consent.</font></font></p>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc76639654"></a>
  <font face="Times New Roman, serif">1.9.1&nbsp;&nbsp;&nbsp; WHAT ARE
  YOUR DATA PROTECTION RIGHTS?</font></h3>
  <p lang="en-GB" align="justify" style="line-height: 150%; background: #ffffff">
  Our Company would like to make sure you are fully aware of all of
  your data protection rights. Every user is entitled to the following:</p>
  <p align="justify" style="line-height: 150%; background: #ffffff"><strong><font color="#000000"><span lang="en-GB">The
  right to access</span></font></strong><font color="#000000">&nbsp;&ndash;
  </font><font color="#000000"><span lang="en-GB">You have the right to
  request Our Company for copies of your personal data. We may charge
  you a small fee for this service.</span></font></p>
  <p align="justify" style="line-height: 150%; background: #ffffff"><strong><font color="#000000"><span lang="en-GB">The
  right to rectification</span></font></strong><font color="#000000">&nbsp;&ndash;
  </font><font color="#000000"><span lang="en-GB">You have the right to
  request that Our Company correct any information you believe is
  inaccurate. You also have the right to request Our Company to
  complete the information you believe is incomplete.</span></font></p>
  <p align="justify" style="line-height: 150%; background: #ffffff"><strong><font color="#000000"><span lang="en-GB">The
  right to erasure</span></font></strong><font color="#000000">&nbsp;&ndash;
  </font><font color="#000000"><span lang="en-GB">You have the right to
  request that Our Company erase your personal data, under certain
  conditions.</span></font></p>
  <p align="justify" style="line-height: 150%; background: #ffffff"><strong><font color="#000000"><span lang="en-GB">The
  right to restrict processing</span></font></strong><font color="#000000">&nbsp;&ndash;
  </font><font color="#000000"><span lang="en-GB">You have the right to
  request that Our Company restrict the processing of your personal
  data, under certain conditions.</span></font></p>
  <p align="justify" style="line-height: 150%; background: #ffffff"><strong><font color="#000000"><span lang="en-GB">The
  right to object to processing</span></font></strong><font color="#000000">&nbsp;&ndash;
  </font><font color="#000000"><span lang="en-GB">You have the right to
  object to Our Company&rsquo;s processing of your personal data, under
  certain conditions.</span></font></p>
  <p align="justify" style="line-height: 150%; background: #ffffff"><strong><font color="#000000"><span lang="en-GB">The
  right to data portability</span></font></strong><font color="#000000">&nbsp;&ndash;
  </font><font color="#000000"><span lang="en-GB">You have the right to
  request that Our Company transfer the data that we have collected to
  another organization, or directly to you, under certain conditions.</span></font></p>
  <p align="justify" style="line-height: 150%; background: #ffffff"><font color="#000000"><span lang="en-GB">If
  you make a request, we have one month to respond to you. If you would
  like to exercise any of these rights, please contact us at our email:
  <a href="mailto:support@vumah.co.uk">support@vumah.co.uk</a> </span></font>
  </p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980513"></a><a name="_Toc76639655"></a>
  <font face="Times New Roman, serif">1.10&nbsp;&nbsp;&nbsp; OTHER
  IMPORTANT INFORMATION:</font></h2>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%; text-decoration: none">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980514"></a><a name="_Toc76639656"></a>
  <font face="Times New Roman, serif">1.10.1&nbsp; CROSS BORDER
  TRANSFER:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Our
  cross-border data transfer involves the safe movement of electronic,
  personal data around the world. We assure that this would be done
  through safe and legal channels in order to serve you better.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980515"></a><a name="_Toc76639657"></a>
  <font face="Times New Roman, serif">1.10.2&nbsp; SENSITIVE
  INFORMATION:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Any
  sensitive information submitted internally is encrypted and may be
  transmitted using approved company e-mail. Any sensitive information
  submitted externally by e-mail may be transmitted using approved
  company e-mail and should contain a statement such as:</font></font></p>
  <p class="msonormal" align="justify" style="margin-left: 1in; margin-bottom: 0in; line-height: 150%">
  &ldquo;<font face="Times New Roman, serif"><font size="2" style="font-size: 9pt"><span lang="en-GB"><i><b>This
  message may contain confidential and/or proprietary information and
  is intended for the person/entity to whom it was originally
  addressed. Any use by others is strictly prohibited.&rdquo;</b></i></span></font></font></p>
  <p class="msonormal" align="justify" style="margin-left: 1in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <p class="msonormal" align="justify" style="margin-left: 1in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980516"></a><a name="_Toc76639658"></a>
  <font face="Times New Roman, serif"><span lang="en-GB">1.10.3&nbsp;
  CHILDREN:</span></font> 
  </h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Our
  websites and online marketing are not directed to, and Enterprise
  does not knowingly collect personal information from, children under
  the age of 18 or your country&rsquo;s age of minority. If you
  nevertheless believe that your child has provided us with their
  personal information and you need to let us know to delete it, please
  contact us.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980517"></a><a name="_Toc76639659"></a>
  <font face="Times New Roman, serif"><span lang="en-GB">1.10.4&nbsp;
  THIRD-PARTY PRIVACY PRACTICES:</span></font> 
  </h3>
  <p lang="en-GB" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Third
  party services may have their own privacy policies and we recommend
  that you review them. They will govern the use of personal
  information that you submit, or which is collected by cookies and
  other tracking technologies whilst using these services. We do not
  accept any responsibility or liability for the privacy practices of
  such third-party services and your use of these is at your own risk.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980518"></a><a name="_Toc76639660"></a>
  <font face="Times New Roman, serif"><span lang="en-GB">1.10.5&nbsp;
  TRANSLATIONS:</span></font> 
  </h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">The
  authoritative language for all our agreements and documents is
  written and understood at FIRST in English. In case of disagreement
  between the English language and a translation, the English version
  is to be considered authoritative.</font></font></p>
  <p align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980519"></a><a name="_Toc76639661"></a>
  <font face="Times New Roman, serif">1.11&nbsp;&nbsp;&nbsp; CHANGES TO
  THIS PRIVACY POLICY:</font></h2>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">We
  may update this privacy policy to reflect changes to our information
  practices. If we make any material changes, we will notify you by
  email (sent to the email address specified in your account) or by
  means of a notice on this site prior to the change becoming
  effective. We encourage you to periodically review this page for the
  latest information on our privacy practices.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980520"></a><a name="_Toc76639662"></a>
  <font face="Times New Roman, serif">1.12&nbsp;&nbsp;&nbsp; CONTACTING
  US:</font></h2>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">The
  accuracy and completeness of the information that we collect is very
  important to us and we make efforts to ensure that the information we
  have is accurate and up to date. In addition to the options provided
  to you in this Policy, if you wish to opt-out of direct marketing or
  review, amend, correct, update or delete any personally identifiable
  information that we have collected about you or limit how we use it,
  contact us at the information provided below. In addition to rights
  to review, amend, correct, update and delete personal data, you may
  also have rights to object to some processing of personal data.
  Please also contact us if you have any questions about privacy on our
  websites. You may contact us via email at </span></font></font><a href="mailto:support@vumah.co.uk"><span lang="en-GB">support@vumah.co.uk</span></a><font color="#000000"><span lang="en-GB">,</span></font>
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">and
  we will attend to your request and make any necessary revisions.</span></font></font></p>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">We
  reserve the right not to allow access to your information if we
  believe in good faith that such disclosure is prohibited by law or if
  the rights of another individual might be violated.</font></font></p>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980521"></a><a name="_Toc76639663"></a>
  <font face="Times New Roman, serif">1.13&nbsp;&nbsp;&nbsp;
  INFORMATION FOR EUROPEAN USERS:</font></h2>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Personal
  information: We will collect personal information about you. We
  collect Personal Data about you when you provide such Personal Data
  directly to us, when third parties such as our business partners or
  service providers provide us with Personal Data about you, or when
  Personal Data about you is automatically collected in connection with
  your use of our Services.</span></font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980522"></a><a name="_Toc76639664"></a>
  <font face="Times New Roman, serif">1.13.1&nbsp; CONTROLLER:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">We
  will be the controller of your Personal Data processed in connection
  with the Services, except that we may also process Personal Data of
  our customers&rsquo; end users or employees in connection with our
  provision of services to such customers, in which case we are the
  processor of Personal Data and the customer is the controller.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980523"></a><a name="_Toc76639665"></a>
  <font face="Times New Roman, serif">1.13.2&nbsp; LEGAL BASES FOR
  PROCESSING:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">We
  gather Personal Data to comply with our legal obligations, resolve
  disputes or collect fees owed, or is otherwise permitted or required
  by applicable law, rule or regulation. Afterwards, we retain some
  information in a depersonalized or aggregated form but not in a way
  that would identify you personally.</font></font></p>
  <p class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980524"></a><a name="_Toc76639666"></a>
  <font face="Times New Roman, serif"><span lang="en-GB">1.13.3&nbsp;
  USE FOR NEW PURPOSES:</span></font> 
  </h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">We
  can use your personal data for purposes other than the ones set out
  in this agreement. We will notify you beforehand and you have the
  discretion to go ahead with our services or otherwise.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980525"></a><a name="_Toc76639667"></a>
  <font face="Times New Roman, serif"><span lang="en-GB">1.13.4&nbsp;
  RETENTION:</span></font> 
  </h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">We
  have the right to retain your personal data for as long as allowed by
  the General Data Protection Regulation (EU) 2016/679 (GDPR). Data
  Records are adequately protected and maintained; Data Records
  containing Personal Data, which are no longer will be discarded at
  the appropriate time.</font></font></p>
  <p class="msonormal" align="justify" style="line-height: 150%">&nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980527"></a><a name="_Toc76639668"></a>
  <font face="Times New Roman, serif">1.15&nbsp;&nbsp;&nbsp; ADDITIONAL
  RELATED TERMS:</font></h2>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980528"></a><a name="_Toc76639669"></a>
  <font face="Times New Roman, serif">1.15.1&nbsp; RECOVERY:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Vumah,
  a hired agent of Vumah, or the host may repossess any vehicle booked
  through the Services without demand, at the guest&rsquo;s expense, if
  the vehicle is not returned by the end of the reservation, is found
  illegally parked, apparently abandoned, or used in violation include
  in applicable law or these Terms. Furthermore, it is stated that
  sometimes without warning you in advance or having permission from
  the court. Vehicle repossession laws vary by state; your contract
  should include above mentioned detail.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-US" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980529"></a><a name="_Toc76639670"></a>
  <font face="Times New Roman, serif">1.15.2&nbsp; VEHICLES THAT GO
  MISSING:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">If
  a vehicle you have booked through the Services goes missing and/or is
  stolen during the reservation period (or extension period), you must
  immediately return the original ignition key to the host, file a
  police report immediately after discovering the vehicle is missing or
  stolen, but in no event more than 24 hours after discovering it has
  gone missing, and cooperate fully with the host, law enforcement,
  Vumah, and other authorities in all matters related to the
  investigation.</font></font></p>
  <p align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980530"></a><a name="_Toc76639671"></a>
  <font face="Times New Roman, serif">1.16&nbsp;&nbsp;&nbsp; COMMON
  ARRANGEMENTS</font></h2>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980531"></a><a name="_Toc76639672"></a>
  <font face="Times New Roman, serif">1.16.1&nbsp; TERMINATION:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">You
  may discontinue your use of the Services at any time and Vumah may
  terminate your access to the Services and remove any listings for any
  reason or no reason to the extent permissible under applicable law.
  Termination of access to the Services will not release a Party from
  any obligations it incurred prior to the termination and Vumah may
  retain and continue to use any information, including but not limited
  to photography, previously provided by you. Termination of the
  Agreement will not have any effect on the disclaimers, waiver or
  liability limitations, or legal disputes provisions under the
  Agreement and/or any fees due, and all of those terms will survive
  any termination of the Agreement.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-US" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980532"></a><a name="_Toc76639673"></a>
  <font face="Times New Roman, serif">1.16.2&nbsp; NO VEHICLE TRANSFER
  OR ASSIGNMENT:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Except
  as otherwise provided herein, guests and hosts agree that nothing in
  these Terms constitutes an actual or purported transfer or assignment
  of any right or interest in a vehicle or optional Extras shared
  through the Services.</font></font></p>
  <h3 lang="en-US" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980533"></a><a name="_Toc76639674"></a>
  <font face="Times New Roman, serif">1.16.3&nbsp; DISCLAIMERS:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Vumah
  provides services that enable the sharing of vehicles and optional
  extras between hosts and guests. Except as otherwise provided in
  these terms, Vumah does not itself provide vehicle sharing, rental
  services, and/or insurance services and is not responsible for any of
  the acts or omissions of any of the users of its services, the
  manufacturer of the vehicle or any optional extras, or any
  third-party provider of services (e.g. In-vehicle GPS or other
  systems). The services are provided &ldquo;as is&rdquo;, without
  warranty of any kind, either express or implied. To the extent
  permitted by applicable law, without limiting the foregoing, Vumah
  explicitly disclaims any warranties of merchantability, fitness for a
  particular purpose, quiet enjoyment, or non-infringement, and any
  warranties arising out of course of dealing or usage of trade. Vumah
  makes no warranty that the Services, including, but not limited to,
  the listing and/or any vehicle or optional Extra, will meet your
  requirements or be available on an uninterrupted, secure, or
  error-free basis. Vumah makes no warranty regarding the quality of
  any listings, vehicles, hosts, guests, Extras, the Services, or any
  content or the accuracy, timeliness, truthfulness, completeness, or
  reliability of any content obtained through the Services. No advice
  or information, whether oral or written, obtained from Vumah, or its
  service providers or through the Services or content, will create any
  warranty not expressly made herein.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980534"></a><a name="_Toc76639675"></a>
  <font face="Times New Roman, serif">1.16.4&nbsp; LIMITATION OF
  RESPONSIBILITY AND WAIVER:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">You
  waive and discharge any and all rights you have to sue or make claims
  against Vumah and any of its subsidiaries, directors, officers,
  agents (including third-party administrators, insurance producers,
  and insurance providers), or employees (together, the &ldquo;Vumah
  parties&rdquo;) and any Vumah user for any damages or losses, whether
  due to negligence or otherwise, arising out of or in connection with
  the following: </font></font>
  </p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">1.</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Vehicle
  availability (e.g., a vehicle not being available or returned when it
  was supposed to be), </span></font></font>
  </p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">2.</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Problems
  with a vehicle (e.g., any malfunction of or deficiency with a
  vehicle), </span></font></font>
  </p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">3.</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Vehicle
  warranty issues (e.g., any breach of warranty or other obligation by
  any manufacturer or other third party associated with the vehicle), </span></font></font>
  </p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">4.</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">The
  legal or license status of a vehicle, host, or guest, (5) third party
  assessments of a vehicle's value, or (6) any action or inaction of a
  host or guest.</span></font></font></p>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">You
  agree that neither Vumah nor any other party involved in creating,
  producing, or delivering the services will be liable for any
  incidental, special, exemplary, or consequential damages (including
  lost profits, data, or goodwill, service interruption, computer
  damage or system failure, or the cost of substitute products or
  services), whether based on warranty, contract, tort (including
  negligence), product liability, or any other legal theory, arising
  out of or connection with the following: </font></font>
  </p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">1.</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">The
  agreement, </span></font></font>
  </p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">2.</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">The
  services (including listing or booking of any vehicle or optional
  extra via the services), or (3) </span></font></font>
  </p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">3.</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Inability
  to use the services.</span></font></font></p>
  <p align="justify" style="margin-bottom: 0in; line-height: 150%">&nbsp;</p>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Except
  for our obligations to pay amounts to applicable hosts or guests
  pursuant to these Terms, including an approved payment request or
  claim under a protection plan or applicable insurance policy, in no
  event will the Vumah Parties' aggregate liability arising out of or
  in connection with the Agreement or your use of the Services, exceed
  the greater of </font></font>
  </p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-GB">&middot;</span></font></font><span style="font-variant: normal"><font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">The
  amounts you have paid or owe for bookings via the Services as a guest
  in the twelve-month period prior to the event giving rise to the
  liability, or if you are a host, the amount earned by you in the
  twelve-month period prior to the event giving rise to the liability,
  or </span></font></font>
  </p>
  <p align="justify" style="text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-GB">&middot;</span></font></font><span style="font-variant: normal"><font face="Symbol"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&pound;150.
  You also waive and discharge any and all rights you have to sue or
  make claims against any Vumah user for any damages or losses arising
  out of or in connection with your use of the services unless:</span></font></font></p>
  <p align="justify" style="margin-left: 0.75in; text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&uuml;</span></font></font><span style="font-variant: normal"><font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Via
  the services and are making a claim against a guest who booked a
  vehicle for which you opted to provide your own commercial/rental
  insurance or coverage to the guest, or </span></font></font>
  </p>
  <p align="justify" style="margin-left: 0.75in; text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&uuml;</span></font></font><span style="font-variant: normal"><font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">You
  are a guest who booked a vehicle from a host who opted to and such
  host opted to provide insurance or protection directly to you and you
  are making a claim against that company/host.</span></font></font></p>
  <p align="justify" style="margin-left: 0.75in; margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">The
  above limitations of liability and waiver provisions are fundamental
  elements of the basis of the bargain between Vumah and you. They
  shall apply to the extent permitted by applicable law, and any
  aspects of them that are deemed void or unenforceable shall be
  severed while leaving the remainder in effect.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980535"></a><a name="_Toc76639676"></a>
  <font face="Times New Roman, serif">1.16.5&nbsp; COMPENSATION:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">You
  agree to release, defend, indemnify, and hold Vumah and its
  subsidiaries, officers, directors, employees, and agents, harmless
  from and against any claims, liabilities, damages, losses, and
  expenses, including, without limitation, reasonable legal and
  accounting fees, arising out of or in any way connected with: </font></font>
  </p>
  <p align="justify" style="margin-left: 1.25in; text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&Oslash;</span></font></font><span style="font-variant: normal"><font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Your
  access to or use of the Services, </span></font></font>
  </p>
  <p align="justify" style="margin-left: 1.25in; text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&Oslash;</span></font></font><span style="font-variant: normal"><font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Your
  violation of these Terms, </span></font></font>
  </p>
  <p align="justify" style="margin-left: 1.25in; text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&Oslash;</span></font></font><span style="font-variant: normal"><font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Your
  user content, </span></font></font>
  </p>
  <p align="justify" style="margin-left: 1.25in; text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&Oslash;</span></font></font><span style="font-variant: normal"><font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Your
  interaction with any other user of the Services, or </span></font></font>
  </p>
  <p align="justify" style="margin-left: 1.25in; text-indent: -0.25in; margin-bottom: 0in; line-height: 150%">
  <font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&Oslash;</span></font></font><span style="font-variant: normal"><font face="Wingdings"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Your
  booking of a vehicle or creation of a listing for a vehicle. Such
  indemnification includes but is not limited to any injuries, losses,
  or damages (compensatory, direct, incidental, consequential, or
  otherwise) arising in connection with or as a result of a booking,
  sharing, or use of a vehicle or optional Extra. This indemnification
  provision is a fundamental element of the basis of the bargain
  between Vumah and you. It shall apply to the extent permitted by
  applicable law, and any aspects of it that are deemed unenforceable
  shall be severed while leaving the remainder in effect.</span></font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980536"></a><a name="_Toc76639677"></a>
  <font face="Times New Roman, serif">1.16.6&nbsp; LIQUIDATED DAMAGES:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">You
  acknowledge that the actual damages likely to result from your
  breaches of the Agreement by any of the following are difficult to
  estimate accurately and would be difficult for Vumah to prove with
  certainty: </font></font>
  </p>
  <p align="justify" style="margin-left: 1.5in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(i)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Engaging
  in grey market transactions, </span></font></font>
  </p>
  <p align="justify" style="margin-left: 1.5in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(ii)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Using
  the Vumah domains, trademarks, or taglines without Vumah's express
  consent, including without limitation registering website domains or
  social media handles, or bidding on online advertising key words, </span></font></font>
  </p>
  <p align="justify" style="margin-left: 1.5in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(iii)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Suing
  or asserting legal claims against the Vumah Parties or a Vumah user
  in any manner prohibited or waived herein, </span></font></font>
  </p>
  <p align="justify" style="margin-left: 1.5in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(iv)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">As
  a host, sharing your vehicle via the Services with expired
  registration stickers or without current registration paperwork in
  the vehicle, </span></font></font>
  </p>
  <p align="justify" style="margin-left: 1.5in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(v)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">As
  a host, offering any vehicle that is the subject of a missing or
  stolen vehicle report, or </span></font></font>
  </p>
  <p align="justify" style="margin-left: 1.5in; text-indent: -0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">(vi)</span></font></font><span style="font-variant: normal"><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  </span></font></font></span><font face="Times New Roman, serif"><font size="3" style="font-size: 12pt"><span lang="en-GB">Creating
  or using a Vumah account that has the effect of circumventing Vumah&rsquo;s
  suspension, termination, or closure of another Vumah account. You
  would be liable to pay &pound;6000 per breach to the Vumah, this
  liability is called liquidated damages. This amount is not intended
  as a punishment for any such breach, but rather as a reasonable
  estimate where actual damages are difficult estimate accurately
  and/or prove with certainty. These liquidated damages provision is a
  fundamental element of the basis of the bargain between Vumah and
  you. It shall apply to the extent permitted by applicable law, and
  any aspects of it that are deemed unenforceable shall be severed
  while leaving the remainder in effect.</span></font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980537"></a><a name="_Toc76639678"></a>
  <font face="Times New Roman, serif">1.16.7&nbsp; VUMAH IS NOT A
  RENTAL CAR COMPANY:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Vumah
  is not a rental car company. It does not own a fleet of vehicles, and
  is not in the business of renting vehicles to the public. Vumah
  provides an online platform where vehicle owners and those in need of
  a vehicle can meet and share vehicles amongst themselves subject to
  these Terms.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980538"></a><a name="_Toc76639679"></a>
  <font face="Times New Roman, serif">1.16.8&nbsp; ROUNDING OFF:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Vumah
  may, in its sole discretion, round up or down amounts that are
  payable from or to hosts or guests to the nearest whole functional
  base unit in which the currency is denominated (e.g. to the nearest
  dollar, euro, pound, or other supported currency) unless explicitly
  prohibited under applicable law.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 2"><a name="_Toc59980539"></a><a name="_Toc76639680"></a>
  <font face="Times New Roman, serif">1.16.9&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  TRANSLATIONS:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Where
  Vumah has provided you with a translation of the English language
  version of these Terms or any Policies, in case of any wording
  discrepancies between the English and any other versions of the Terms
  and any Policies, the English language wording takes precedence.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980540"></a><a name="_Toc76639681"></a>
  <font face="Times New Roman, serif">1.16.10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  SEVERABILITY AND NON-WAIVER:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">In
  the event any provision of these Terms is held to be void, voidable,
  or unenforceable, the remaining provisions shall remain in full force
  and effect. The failure of any Party to enforce any provision of
  these Terms shall not be construed to be a waiver of such provision,
  or any other provision, nor in any way to affect the validity of
  these Terms or any part of these Terms, or any right of any Party to
  enforce that provision or each and every other provision at any time.
  No waiver of any breach of these Terms shall constitute or be deemed
  a waiver of any other breach.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc59980541"></a><a name="_Toc76639682"></a>
  <font face="Times New Roman, serif">1.16.11&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  COMMON NOTICE:</font></h3>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">Vumah
  does not appoint you or any other user as its employee, mandatory,
  legal agent, or form any kind of legal partnership or joint venture.
  You are not authorized to make any commitments on behalf of Vumah and
  Vumah will not make commitments on your behalf, except as
  contemplated by the Services or expressly stated in these Terms.</font></font></p>
  <p lang="en-GB" class="msonormal" align="justify" style="text-indent: 0.5in; margin-bottom: 0in; line-height: 150%">
  <font face="Times New Roman, serif"><font size="3" style="font-size: 12pt">The
  Agreement, including these Terms, states the entire understanding
  between you and Vumah concerning your access to and use of the
  Services and supersedes any earlier verbal or written communications
  between us. With the exception of appointing a custodian to manage
  your vehicles on your behalf, you may not delegate your legal
  obligations or transfer any of your rights, in whole or in part, to
  any third party without advance written consent of Vumah. You will
  remain responsible for your obligations hereunder in any event. A
  Vumah Director or Officer must agree to any modification or waiver of
  any term of the Agreement in writing. Headings are for reference
  purposes only and do not limit the scope or extent of such section.</font></font></p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc76639683"></a>
  <font face="Times New Roman, serif">1.17&nbsp;&nbsp;&nbsp; COOKIES</font></h2>
  <p align="justify" style="text-indent: 0.5in; line-height: 150%; background: #ffffff">
  <font color="#000000"><span lang="en-GB">Cookies are text files
  placed on your computer to collect standard Internet log information
  and visitor behaviour information. When you visit our websites, we
  may collect information from you automatically through cookies or
  similar technology. For further information, visit
  <a href="http://www.allaboutcookies.org/">www.allaboutcookies.org</a>.</span></font></p>
  <p align="justify" style="text-indent: 0.5in; line-height: 150%; background: #ffffff">
  &nbsp;</p>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc76639684"></a>
  <font face="Times New Roman, serif">1.17.1&nbsp; HOW DO WE USE
  COOKIES?</font></h3>
  <p lang="en-GB" align="justify" style="text-indent: 0.25in; line-height: 150%; background: #ffffff">
  Our Company uses cookies in a range of ways to improve your
  experience on our website, including:</p>
  <ul type="disc">
    <li><p align="justify" style="margin-bottom: 0in; line-height: 150%; background: #ffffff">
    <font color="#000000"><font face="Times New Roman, serif"><span lang="en-GB"><u>Keeping
    you signed in</u></span></font></font> 
    </p>
    <li><p align="justify" style="line-height: 150%; background: #ffffff">
    <font color="#000000"><font face="Times New Roman, serif"><span lang="en-GB"><u>Understanding
    how you use our website</u></span></font></font> 
    </p>
  </ul>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc76639685"></a>
  <font face="Times New Roman, serif">1.17.2&nbsp; WHAT TYPES OF
  COOKIES DO WE USE?</font></h3>
  <p lang="en-GB" align="justify" style="line-height: 150%; background: #ffffff">
  There are a number of different types of cookies, however, our
  website uses:</p>
  <ul type="disc">
    <li><p align="justify" style="margin-bottom: 0in; line-height: 150%; background: #ffffff">
    <font color="#000000"><font face="Times New Roman, serif"><span lang="en-GB"><u>Functionality
    &ndash; Our Company uses these cookies so that we recognize you on
    our website and remember your previously selected preferences. These
    could include what language you prefer and location you are in and
    understanding the user journey for website optimisation. A mix of
    first-party and third-party cookies are used.</u></span></font></font>
      </p>
    <li><p align="justify" style="line-height: 150%; background: #ffffff">
    <font color="#000000"><font face="Times New Roman, serif"><span lang="en-GB"><u>Advertising
    &ndash; Our Company uses these cookies to collect information about
    your visit to our website, the content you viewed, the links you
    followed and information about your browser, device, and your IP
    address. Our Company sometimes shares some limited aspects of this
    data with third parties for advertising purposes. We may also share
    online data collected through cookies with our advertising partners.
    This means that when you visit another website, you may be shown
    advertising based on your browsing patterns on our website.</u></span></font></font>
      </p>
  </ul>
  <h3 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc76639686"></a>
  <font face="Times New Roman, serif">1.17.3&nbsp; HOW TO MANAGE
  COOKIES</font></h3>
  <p lang="en-GB" align="justify" style="text-indent: 0.5in; line-height: 150%; background: #ffffff">
  You can set your browser not to accept cookies, and the above website
  tells you how to remove cookies from your browser. However, in a few
  cases, some of our website features may not function as a result.</p>
  <p align="justify" style="line-height: 150%; background: #ffffff">&nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc76639687"></a>
  <font face="Times New Roman, serif">1.18&nbsp;&nbsp;&nbsp; PRIVACY
  POLICIES OF OTHER WEBSITES</font></h2>
  <p lang="en-GB" align="justify" style="text-indent: 0.5in; line-height: 150%; background: #ffffff">
  The Our Company website contains links to other websites. Our privacy
  policy applies only to our website, so if you click on a link to
  another website, you should read their privacy policy.</p>
  <p align="justify" style="line-height: 150%; background: #ffffff">&nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc76639688"></a>
  <font face="Times New Roman, serif">1.19&nbsp;&nbsp;&nbsp; CHANGES TO
  OUR PRIVACY POLICY</font></h2>
  <p lang="en-GB" align="justify" style="text-indent: 0.5in; line-height: 150%; background: #ffffff">
  Our Company keeps its privacy policy under regular review and places
  any updates on this web page. This privacy policy was last updated on
  8 July 2021.</p>
  <p align="justify" style="line-height: 150%; background: #ffffff">&nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc76639689"></a>
  <font face="Times New Roman, serif">1.20&nbsp;&nbsp;&nbsp; HOW TO
  CONTACT US</font></h2>
  <p align="justify" style="text-indent: 0.5in; line-height: 150%; background: #ffffff">
  <font color="#000000"><span lang="en-GB">If you have any questions
  about Our Company&rsquo;s privacy policy, the data we hold on you, or
  you would like to exercise one of your data protection rights, please
  do not hesitate to contact us. Email us at: <a href="mailto:support@vumah.co.uk">support@vumah.co.uk</a></span></font></p>
  <p align="justify" style="line-height: 150%; background: #ffffff">&nbsp;</p>
  <h2 lang="en-GB" class="western" align="justify" style="line-height: 150%; orphans: 1"><a name="_Toc76639690"></a>
  <font face="Times New Roman, serif">1.21&nbsp;&nbsp;&nbsp; HOW TO
  CONTACT THE APPROPRIATE AUTHORITY</font></h2>
  <p align="justify" style="text-indent: 0.5in; line-height: 150%; background: #ffffff">
  <font color="#000000"><span lang="en-GB">Should you wish to report a
  complaint or if you feel that Our Company has not addressed your
  concern in a satisfactory manner, you may contact the Information
  Commissioner&rsquo;s Office. You can call on 0303 123 1113,
  alternatively, visit <a href="https://ico.org.uk/global/contact-us/">https://ico.org.uk/global/contact-us/</a>.
  </span></font>
  </p>
  <p class="msonormal" align="justify" style="margin-bottom: 0in; line-height: 150%">
  &nbsp;</p>`;

  return (
    <section className="support-main padd-top-60 padd-bottom-60">
      <div className="container">
        <div className="row">
          <div className="col-md-3 support-sidebar" dangerouslySetInnerHTML={{__html: nav}}></div>
          <div className="col-md-8 guest-management padding-left-thirty" dangerouslySetInnerHTML={{__html: tos}}>
          </div>
        </div>
      </div>
    </section>
  );
}