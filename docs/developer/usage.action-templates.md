---
layout: single
---

# Action Templates

{% include toc %}

## Overview

To help make it easier for developers to create custom components that interact with 
iVXjs experiences, iVXjs has some attributes that when set will fire different actions 
within the application when the element is clicked

## Animate Element

_Description_

Adds an animation class to an element. 

_Usage_

```
<ANY ivx-animate="{[ELEMENT], [ANIMATION CLASS]}"></ANY>
```

## Go To State

_Description_

Navigates to the state specified by the id

_Usage_

```
<ANY ivx-go-to-state="[STATE ID]"></ANY>
```

## Set Data 

_Description_ 

Sets the value with the matching key to the current experience's data object

_Usage_

```
<ANY ivx-set-data="{[KEY], [VALUE]}"></ANY>
```

## iVXjs Raise Event 

_Description_

Raises an event on the iVXjs's Bus.

_Usage_

```
<ANY ivx-event="[iVXjsEVENT-NAME]" ivx-event-args="{ARG1 : ARGVALUE-1, ARG2 : ARG-VALUE-2, etc...}></ANY>
```

# iVXio Action Templates

## iVXio Set Milestone

_Description_

Sets a milestone in the iVX Platform

_Usage_

```
<ANY ivx-set-milestone="[MILESTONE]"></ANY>    
```

## iVXio Record Event

_Description_

Sets fires an event on the iVX Platform

_Usage_

```
<ANY ivx-record-event="[EVENT-KEY]"></ANY> 
```

## iVXio Set Completed

_Description_

Sets this iVX experience to Completed

_Usage_  

```
<ANY ivx-set-completed></ANY>    
```

## iVXio Set Converted

_Description_

Sets this iVX experience to Converted with a conversion label.

_Usage_  

```
<ANY ivx-set-converted="[CONVERSION LABEL]">Set Converted</ANY></ANY>
```