---
layout: page
permalink: /program/
title: Program
---

<p class="notice">All times local. Plenaries livestreamed; breakout sessions in-person only.</p>

{% assign days = site.data.schedule.days %}
{% for day in days %}
  <section class="section">
    <h2>{{ day.title }} ({{ day.date | date: "%b %d, %Y" }})</h2>
    <table class="table">
      <thead>
        <tr><th style="width:140px;">Time</th><th>Session</th><th>Speakers</th></tr>
      </thead>
      <tbody>
        {% for s in day.sessions %}
        <tr>
          <td>{{ s.time }}</td>
          <td>{{ s.title }}</td>
          <td>{% if s.speakers %}{{ s.speakers | join: ", " }}{% else %}&mdash;{% endif %}</td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
    {% if day.files %}
    <div class="section">
      <h3>Files</h3>
      <ul>
        {% for f in day.files %}
        <li><a href="{{ site.baseurl }}{{ f.href }}" target="_blank" rel="noopener">{{ f.label }}</a></li>
        {% endfor %}
      </ul>
    </div>
    {% endif %}
  </section>
{% endfor %}
