---
layout: page
permalink: /participants/
title: Participants
---

<p>Confirmed attendees will appear here. If your details need to be updated, contact the organizers.</p>

<div class="grid-3">
{% for p in site.data.participants %}
  <div class="card">
    <h3>{{ p.name }}</h3>
    {% if p.affiliation %}<p><em>{{ p.affiliation }}</em></p>{% endif %}
    {% if p.interests %}<p>Interests: {{ p.interests }}</p>{% endif %}
    {% if p.role %}<p>Role: {{ p.role }}</p>{% endif %}
  </div>
{% endfor %}
</div>

<section class="section">
  <h2>Code of Conduct</h2>
  <p>
    We are committed to a welcoming, inclusive environment. Harassment of any kind is not tolerated.
    To report an issue, see the <a href="{{ site.baseurl }}/contact/">Contact</a> page.
  </p>
</section>
