<script setup lang="ts">
import BaseContent from '@/components/BaseContent.vue'
import TimelineContent from './components/TimelineChart/TimelineChart.vue'
import type { History } from './components/TimelineChart/types'

/**
 * 経歴情報
 */
const HISTORY: History[] = [
  {
    date: '2018年3月',
    summary: '國學院大學文学部外国語文化学科 卒業'
  },
  {
    date: '2018年4月',
    summary: 'SIerに新卒入社'
  },
  {
    date: '2018年4〜6月',
    summary: '新人研修',
    techs: ['Java', 'JSP', 'MySQL']
  },
  {
    date: '2018年7月〜2019年7月',
    summary: 'ECサイトの運用・保守',
    description: ['障害の原因調査', 'データ管理', '運用マニュアルの作成'],
    techs: ['Java', 'JSP', 'MySQL']
  },
  {
    date: '2019年8月〜現在',
    summary: 'ECサイトのフロントエンド開発(スクラム)',
    description: ['フロントエンドの詳細設計', '実装', '単体テスト実装', '結合試験書の作成'],
    techs: ['HTML', 'SCSS', 'TypeScript', 'Vue', 'Jest', 'Storybook', 'Cypress', 'Docker', 'JSP']
  }
]
</script>

<template>
  <base-content class="career-content">
    <template #title>Career</template>
    <template #content>
      <timeline-content :contents="HISTORY"></timeline-content>
    </template>
  </base-content>
</template>
