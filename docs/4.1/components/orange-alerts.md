---
layout: docs
title: Orange Alerts
description: Standardised Orange Alerts
group: components
toc: true
---

## Usage

As standard Alerts, Alerts Orange are available for any length of text. In addition of the use of the eight **required** contextual classes (e.g., `.alert-success`), use (e.g., `.o-alert-small`) for the size of the alert box. The logo **required** a contextual classe (e.g.,`o-alert-logo-success-small`).
The text must be inside a div tag with this **required** class (e.g,`o-alert-padding`).
{% capture example %}

<h3>Orange Alerts</h3>
    <!-- Custom Alerts
    ======================================= -->
    <div class="alert o-alert-small alert-success alert-dismissible fade show" role="alert">
        <span class="o-alert-logo-success-small"></span>
        <div class="o-alert-padding">
        <strong>Your changes have been saved.</strong>
        </div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span class="span-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert o-alert-medium alert-info alert-dismissible fade show" role="alert">
        <span class="o-alert-logo-info-medium"></span>
        <div class="o-alert-padding">
            <strong>Your changes have been saved.</strong>
        </div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span class="span-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert o-alert-large alert-warning alert-dismissible fade show" role="alert">
        <span class="o-alert-logo-warning-large"></span>
        <div class="o-alert-padding">
            <strong >Your changes have been saved.</strong>
        </div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span class="span-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert o-alert-large alert-danger boosted-multiline alert-dismissible fade show" role="alert">
        <span class="o-alert-logo-danger-large"></span>
        <div class="o-alert-padding">
        <strong>Your changes have been saved.</strong>
            <p class="mb-0"><small>You may now log-in with the username you have chosen.</small></p>
        </div>
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span class="span-dark" aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="alert o-alert-no-border o-alert-small" role="alert">
        <span class="o-alert-logo-success-small"></span>
        <div class="o-alert-padding">
        <strong>Your changes have been saved.</strong>
        </div>
    </div>
    <div class="inverse">
        <!-- Custom Alerts
        ======================================= -->
        <div class="alert o-alert-small alert-inverse alert-success alert-dismissible fade show" role="alert">
            <span class="o-alert-logo-success-small"></span>
            <div class="o-alert-padding">
            <strong>Your changes have been saved.</strong>
            </div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span class="span-dark-inverse" aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert o-alert-medium alert-inverse alert-info alert-dismissible fade show" role="alert">
            <span class="o-alert-logo-info-medium"></span>
            <div class="o-alert-padding">
                <strong>Your changes have been saved.</strong>
            </div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span class="span-dark-inverse" aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert o-alert-large alert-inverse alert-warning alert-dismissible fade show" role="alert">
            <span class="o-alert-logo-warning-large"></span>
            <div class="o-alert-padding">
                <strong >Your changes have been saved.</strong>
            </div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span class="span-dark-inverse" aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert o-alert-large alert-inverse alert-danger boosted-multiline alert-dismissible fade show" role="alert">
            <span class="o-alert-logo-danger-large"></span>
            <div class="o-alert-padding">
            <strong>Your changes have been saved.</strong>
                <p class="mb-0"><small>You may now log-in with the username you have chosen.</small></p>
            </div>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span class="span-dark-inverse" aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="alert o-alert-no-border alert-inverse o-alert-small" role="alert">
            <span class="o-alert-logo-success-small"></span>
            <div class="o-alert-padding">
            <strong>Your changes have been saved.</strong>
            </div>
        </div>
    </div>

{% endcapture %} {% include example.html content=example %}