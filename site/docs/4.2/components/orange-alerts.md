---
layout: docs
title: Orange Alerts
description: Standardised Orange Alerts
group: components
toc: true
---

## Usage

Outline alerts could be created for any length of text. 3 sizes available `.alert-sm`, md as default, `.alert-lg`. In addition of the use of the **required** alert classe (e.g., `.alert`), use (e.g., `.alert-sm`) for the size of the alert box. The logo **required** a contextual classe (e.g.,`.alert-icon-success-sm`).
The text must be inside a div tag with padding and margin **required** class (e.g,`.pl-3 .ml-3`).
{% capture example %}

<h3>Orange Alerts</h3>
    <!-- Custom Alerts
    ======================================= -->
    <div class="alert alert-sm border border-success alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon-success-sm" aria-label="Success"></span>
        <div class="pl-4 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close p-1 px-3 pb-2" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">×</span>
        </button>
    </div>
    <div class="alert border border-info alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon-info-md" aria-label="Info"></span>
        <div class="pl-3 ml-3 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close pb-3" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert alert-lg border border-warning alert-dismissible fade show bg-transparent" role="alert">
        <span class="alert-icon-warning-lg" aria-label="Warning"></span>
        <div class="pl-5 font-weight-bold">
            Your changes have been saved.
        </div>
        <button type="button" class="close mt-1" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert alert-lg border border-danger alert-dismissible fade show bg-transparent text-dark" role="alert">
        <span class="alert-icon-danger-lg mt-2" aria-label="Danger"></span>
        <div class="pl-5">
            <div class="font-weight-bold">Your changes have been saved.</div>
            <p class="mb-0">You may now log-in with the username you have chosen.</p>
        </div>
        <button type="button" class="close mt-1" data-dismiss="alert" aria-label="Close">
        <span class="text-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert border-0 alert-sm bg-transparent px-0" role="alert">
        <span class="alert-icon-success-sm" aria-label="Success"></span>
        <div class="ml-4 font-weight-bold">
            Your changes have been saved.
        </div>
    </div>
    <div class="bg-dark">
        <!-- Custom Alerts
        ======================================= -->
        <div class="alert alert-sm border border-success alert-dismissible fade show bg-transparent text-white" role="alert">
            <span class="alert-icon-success-sm" aria-label="Success"></span>
            <div class="pl-4 font-weight-bold">
                Your changes have been saved.
            </div>
            <button type="button" class="close p-1 px-3 pb-2" data-dismiss="alert" aria-label="Close">
            <span class="text-white" aria-hidden="true">×</span>
            </button>
        </div>
        <div class="alert border border-info alert-dismissible fade show bg-transparent text-white" role="alert">
            <span class="alert-icon-info-md" aria-label="Info"></span>
            <div class="pl-3 ml-3 font-weight-bold">
                Your changes have been saved.
            </div>
            <button type="button" class="close pb-3" data-dismiss="alert" aria-label="Close">
            <span class="text-white" aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert alert-lg border border-warning alert-dismissible fade show bg-transparent text-white" role="alert">
            <span class="alert-icon-warning-lg" aria-label="Warning"></span>
            <div class="pl-5 font-weight-bold">
                Your changes have been saved.
            </div>
            <button type="button" class="close mt-1" data-dismiss="alert" aria-label="Close">
            <span class="text-white" aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert alert-lg border border-danger alert-dismissible fade show bg-transparent text-white" role="alert">
            <span class="alert-icon-danger-lg mt-2" aria-label="Danger"></span>
            <div class="pl-5 font-weight-bold">
                <div class="font-weight-bold">Your changes have been saved.</div>
                <p class="mb-0"><small>You may now log-in with the username you have chosen.</small></p>
            </div>
            <button type="button" class="close mt-1" data-dismiss="alert" aria-label="Close">
            <span class="text-white" aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert border-0 alert-sm bg-transparent px-0 text-white" role="alert">
            <span class="alert-icon-success-sm" aria-label="Success"></span>
            <div class="ml-4 font-weight-bold">
                Your changes have been saved.
            </div>
        </div>
    </div>

{% endcapture %} {% include example.html content=example %}