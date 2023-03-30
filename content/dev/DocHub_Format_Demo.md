---
title: "Doc Hub Format Demo"
date: 2022-09-08T11:35:00-05:00
draft: true
weight: 1
---
This is plain text using the default font size and color.

The header formats are defined in the THEME.CSS file and are currently configured as follows:

# Heading 1: Teamwork Blue, 250% of 'normal'

This is more plain text. 

## Heading 2: Teamwork Blue, 200% of 'normal'

This is more plain text. 

### Heading 3: Teamwork Blue, 170% of 'normal'

This is more plain text. 

#### Heading 4: Teamwork Blue, 140% of 'normal'

This is more plain text. 

##### Heading 5: Teamwork Blue, 120% of 'normal'

This is more plain text. 

###### Heading 6: Teamwork Blue, 'normal'

This is more plain text.

<!-- ---------------------------------------------------------------------

---

***Notes***

The use of CSS classes to define *notes* will give us the ability to have *note* text highlighted without using the Hugo *notice* markdown. This would give us the ability to have notes without the standard, hard-coded, Hugo titles. It would also give us the ability to decide on the colors to be used and on the scope and type of the highlighting within our documents.

When using the CSS classes to highlight *notes*, the appropriate classes would be applied using the \<span\>...\</span\> HTML markup. What gets highlighted would depend on where the  \<span\>...\</span\> markup is placed.

Below are examples of notes using the various possibilities I have added to the THEME.CSS file. We can finalize the details (colors, etc.).

<span class="err-title-norm">Error/High Priority Note 1</span>  
This is an example of an <i>error</i> note with formatting of the note title only, using color for the text.

<span class="err-title-rev">Error/High Priority Note 2</span>  
This is an example of an <i>error</i> note with formatting of the note title only, using color as the background.

<span class="err-title-norm">Error/High Priority Note 3</span>  
<span class="err-body-norm">This is an example of an <i>error</i> note with formatting of the entire note, using color for the text.</span>

<span class="err-title-rev">Error/High Priority Note 4</span>  
<span class="err-body-rev">This is an example of an <i>error</i> note with formatting of the entire note, using color as the background. The problem with this approach is that Hugo/HTML seems to leave some whitespace between display lines and also only displays the background color behind actual text; therefore, I don't think that this is a viable approach instead of using the Hugo *notice* markdown. (This applies to all of the similar examples below) </span>

<div class="box-solid">
<span class="err-title-norm">Error/High Priority Note 5</span><br>
This is an example of an <i>error</i> note with formatting of the note title only, using color for the text and enclosing the whole thing in a solid box. I think that this method looks the best.
</div>
<br>
<div class="box-solid">
<span class="err-title-rev">Error/High Priority Note 6</span><br>
This is an example of an <i>error</i> note with formatting of the note title only, only, using color as the background and enclosing the whole thing in a solid box.
</div>
<br>
<div class="box-solid">
<span class="err-title-norm">Error/High Priority Note 7</span><br>
<span class="err-body-norm">This is an example of an <i>error</i> note with formatting of the entire note, using color for the text and enclosing the whole thing in a solid box.</span>
</div>

<span class="warn-title-norm">Warning/Medium Priority Note 1</span>  
This is an example of a <i>warning</i> note with formatting of the note title only, using color for the text.

<span class="warn-title-rev">Warning/Medium Priority Note 2</span>  
This is an example of a <i>warning</i> note with formatting of the note title only, using color as the background.

<span class="warn-title-hc">Warning/Medium Priority Note 3</span>  
This is an example of a <i>warning</i> note with formatting of the note title only, using color as the background and high contrast black for the text.

<span class="warn-title-norm">Warning/Medium Priority Note 4</span>  
<span class="warn-body-norm">This is an example of a <i>warning</i> note with formatting of the entire note, using color for the text.</span>

<span class="warn-title-rev">Warning/Medium Priority Note 5</span>  
<span class="warn-body-rev">This is an example of a <i>warning</i> note with formatting of the entire note, using color as the background.</span>

<span class="warn-title-hc">Warning/Medium Priority Note 6</span>  
<span class="warn-body-hc">This is an example of a <i>warning</i> note with formatting of the entire note, using color as the background and high contrast black for the text.</span>

<div class="box-solid">
<span class="warn-title-norm">Warning/Medium Priority Note 7</span><br>
This is an example of a <i>warning</i> note with formatting of the note title only, using color for the text and enclosing the whole thing in a solid box.
</div>
<br>
<span class="info-title-norm">Info/Low Priority Note 1</span>  
This is an example of an <i>info</i> note with formatting of the note title only, using color for the text.

<span class="info-title-rev">Info/Low Priority Note 2</span>  
This is an example of an <i>info</i> note with formatting of the note title only, using color as the background.

<span class="info-title-norm">Info/Low Priority Note 3</span>  
<span class="info-body-norm">This is an example of an <i>info</i> note with formatting of the entire note, using color for the text.</span>

<span class="info-title-rev">Info/Low Priority Note 4</span>  
<span class="info-body-rev">This is an example of an <i>info</i> note with formatting of the entire note, using color as the background.</span>

<div class="box-solid">
<span class="info-title-norm">Info/Low Priority Note 7</span><br>
This is an example of an <i>info</i> note with formatting of the note title only, using color for the text and enclosing the whole thing in a solid box.
</div>

---

<div class="box-solid">
In addition, as I've documented previously, we could highlight text by simply enclosing it in a box without using any colors as this text shows. Doing this will highlight a block of text without the use of colors for those situations where using multiple colors would get grating on the eyes.

This could also highlight multiple paragraphs if needed.
</div>
------------------------------------------------- -->