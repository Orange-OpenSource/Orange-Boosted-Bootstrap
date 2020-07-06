---
layout: guidelines
title: Forms
description: This design kit contains the essential UI elements for designing, prototyping and building Orange products and services on the web.
group: guidelines
subgroup: Components
toc: true
---

## Standard table

<div>
  <table class="table table-sm table-responsive" id="web-tbl-std-001">
    <caption class="h4">Standard table with column headers</caption>
    <thead>
      <tr>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
    </tbody>
  </table>
</div>

## Row selection

{{< callout info >}}
### Selection feature

The selection behaviour isn't implemented yet. This feature will be delivered with [#116]({{< param repo >}}/issues/116).
{{< /callout >}}

<div>
  <table class="table table-sm table-hover table-responsive" id="web-tbl-std-002">
    <caption class="h4">Standard table with column headers and row selection</caption>
    <thead>
      <tr>
        <th scope="col">
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck">
            <label class="form-check-label" for="customCheck">
              <span class="custom-control-description sr-only">Select all</span>
            </label>
          </div>
        </th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck1">
            <label class="form-check-label" for="customCheck1">
                <span class="custom-control-description sr-only">Select first row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck2">
            <label class="form-check-label" for="customCheck2">
                <span class="custom-control-description sr-only">Select second row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr class="table-active">
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck3" checked>
            <label class="form-check-label" for="customCheck3">
                <span class="custom-control-description sr-only">Select third row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr class="table-active">
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck4" checked>
            <label class="form-check-label" for="customCheck4">
                <span class="custom-control-description sr-only">Select fourth row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
            <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck5">
            <label class="form-check-label" for="customCheck5">
                <span class="custom-control-description sr-only">Select fifth row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck6">
            <label class="form-check-label" for="customCheck6">
                <span class="custom-control-description sr-only">Select sixth row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck7">
            <label class="form-check-label" for="customCheck7">
                <span class="custom-control-description sr-only">Select seventh row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck8">
            <label class="form-check-label" for="customCheck8">
                <span class="custom-control-description sr-only">Select eighth row</span>
            </label>
          </div>
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
    </tbody>
  </table>
</div>

## With icons or thumbnails

<div>
  <table class="table table-sm table-hover table-responsive align-middle" id="web-tbl-std-003">
    <caption class="h4">Standard table with column headers, row selection and icons or thumbnails</caption>
    <thead>
      <tr>
        <th scope="col">
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck9">
            <label class="form-check-label" for="customCheck9">
              <span class="custom-control-description sr-only">Select all</span>
            </label>
          </div>
        </th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck10">
            <label class="form-check-label" for="customCheck10">
              <span class="custom-control-description sr-only">Select first row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="mr-1" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-labelledby="svg1">
            <title id="svg1">Thumbnail</title>
            <rect width="100%" height="100%" fill="#ffd200"></rect>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck11">
            <label class="form-check-label" for="customCheck11">
              <span class="custom-control-description sr-only">Select second row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="mr-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg2">
            <title id="svg2">Document</title>
            <path fill-rule="evenodd" d="M18.75 2.25v4.5c0 .828.597 1.5 1.333 1.5h4.667l-6-6zm1.5 7.5c-1.657 0-3-1.343-3-3v-4.5h-12v24c0 .828.672 1.5 1.5 1.5h18v-18h-4.5zm-10.5 1.5h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm3 4.5h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr class="table-active">
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck12" checked>
            <label class="form-check-label" for="customCheck12">
              <span class="custom-control-description sr-only">Select third row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="mr-1" preserveAspectRatio="xMidYMid slice" role="img" aria-labelledby="svg3">
            <title id="svg3">Thumbnail</title>
            <rect width="100%" height="100%" fill="#4bb4e6"></rect>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr class="table-active">
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck13" checked>
            <label class="form-check-label" for="customCheck13">
              <span class="custom-control-description sr-only">Select fourth row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="mr-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg4">
            <title id="svg4">Document</title>
            <path fill-rule="evenodd" d="M18.75 2.25v4.5c0 .828.597 1.5 1.333 1.5h4.667l-6-6zm1.5 7.5c-1.657 0-3-1.343-3-3v-4.5h-12v24c0 .828.672 1.5 1.5 1.5h18v-18h-4.5zm-10.5 1.5h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm3 4.5h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
            <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck14">
            <label class="form-check-label" for="customCheck14">
              <span class="custom-control-description sr-only">Select fifth row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="mr-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg5">
            <title id="svg5">Document</title>
            <path fill-rule="evenodd" d="M18.75 2.25v4.5c0 .828.597 1.5 1.333 1.5h4.667l-6-6zm1.5 7.5c-1.657 0-3-1.343-3-3v-4.5h-12v24c0 .828.672 1.5 1.5 1.5h18v-18h-4.5zm-10.5 1.5h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm3 4.5h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck15">
            <label class="form-check-label" for="customCheck15">
              <span class="custom-control-description sr-only">Select sixth row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="mr-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg6">
            <title id="svg6">Document</title>
            <path fill-rule="evenodd" d="M18.75 2.25v4.5c0 .828.597 1.5 1.333 1.5h4.667l-6-6zm1.5 7.5c-1.657 0-3-1.343-3-3v-4.5h-12v24c0 .828.672 1.5 1.5 1.5h18v-18h-4.5zm-10.5 1.5h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm3 4.5h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck16">
            <label class="form-check-label" for="customCheck16">
              <span class="custom-control-description sr-only">Select seventh row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="mr-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg7">
            <title id="svg7">Document</title>
            <path fill-rule="evenodd" d="M18.75 2.25v4.5c0 .828.597 1.5 1.333 1.5h4.667l-6-6zm1.5 7.5c-1.657 0-3-1.343-3-3v-4.5h-12v24c0 .828.672 1.5 1.5 1.5h18v-18h-4.5zm-10.5 1.5h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm3 4.5h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
      <tr>
        <td>
          <div class="form-check mb-0">
            <input class="form-check-input" type="checkbox" id="customCheck17">
            <label class="form-check-label" for="customCheck17">
              <span class="custom-control-description sr-only">Select eighth row</span>
            </label>
          </div>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" class="mr-1" viewBox="0 0 30 30" role="img" aria-labelledby="svg8">
            <title id="svg8">Document</title>
            <path fill-rule="evenodd" d="M18.75 2.25v4.5c0 .828.597 1.5 1.333 1.5h4.667l-6-6zm1.5 7.5c-1.657 0-3-1.343-3-3v-4.5h-12v24c0 .828.672 1.5 1.5 1.5h18v-18h-4.5zm-10.5 1.5h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm0 3h10.5c.414 0 .75.336.75.75s-.336.75-.75.75H9.75c-.414 0-.75-.336-.75-.75s.336-.75.75-.75zm3 4.5h-3c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h3c.414 0 .75.336.75.75s-.336.75-.75.75z"/>
          </svg>
          Cell text
        </td>
        <td>Cell text</td>
        <td>Cell text</td>
        <td>Cell text</td>
      </tr>
    </tbody>
  </table>
</div>

## With column headers and icons

<div>
  <table class="table table-responsive align-middle" id="web-tbl-std-005">
    <caption class="h4">Standard table with column headers and icons</caption>
    <thead>
      <tr>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
        <th scope="col">Column header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row" class="font-weight-normal">Cell text</th>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check1-1">
            <title id="check1-1">Yes</title>
            <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check1-2">
            <title id="check1-2">Yes</title>
            <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check1-3">
            <title id="check1-3">Yes</title>
            <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" class="font-weight-normal">Cell text</th>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check2-1">
            <title id="check2-1">Yes</title>
            <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check2-2">
            <title id="check2-2">Yes</title>
            <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check2-3">
            <title id="check2-3">Yes</title>
            <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" class="font-weight-normal">Cell text</th>
        <td></td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check3-1">
            <title id="check3-1">Yes</title>
            <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check3-2">
            <title id="check3-2">Yes</title>
            <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" class="font-weight-normal">Cell text</th>
        <td></td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check4-1">
            <title id="check4-1">Yes</title>
            <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check4-2">
            <title id="check4-2">Yes</title>
            <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" class="font-weight-normal">Cell text</th>
        <td></td>
        <td></td>
        <td>
         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check5">
           <title id="check5">Yes</title>
           <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
      </tr>
      <tr>
        <th scope="row" class="font-weight-normal">Cell text</th>
        <td></td>
        <td></td>
        <td>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img" aria-labelledby="check6">
            <title id="check6">Yes</title>
            <path fill="#32C832" fill-rule="evenodd" d="M26.25 7.2c.005-.775-.453-1.48-1.164-1.789-.71-.31-1.538-.165-2.102.367L11.509 16.95l-3.781-4.21c-.769-.664-1.92-.62-2.634.101l-.776.78c-.699.704-.76 1.82-.143 2.597l6.207 7.8c.367.462.925.732 1.515.732.59 0 1.147-.27 1.514-.732l12.414-15.6c.276-.346.426-.775.425-1.218z"/>
          </svg>
        </td>
      </tr>
    </tbody>
  </table>
</div>
