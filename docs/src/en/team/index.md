---
layout: page
---
<script setup>
import { ref, onMounted } from 'vue'
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

function toVPMember(member) {
  return {
    avatar: `https://cdn.discordapp.com/avatars/${member.id}/${member.avatar}.png`,
    name: member.name,
    title: `User ID: ${member.id}`,
    links: [
      { icon: 'discord', link: `https://discord.gg/ticketsbot` }
    ]
  }
}

const core_team = ref([]);
const community_admins = ref([]);
const community_support = ref([]);

onMounted(async () => {
  const response = await fetch('https://docs-api.tickets-v2.workers.dev/docs/staff')
  const data = await response.json()
  core_team.value = data.core_team.map(toVPMember)
  community_admins.value = data.community_admins.map(toVPMember)
  community_support.value = data.community_support.map(toVPMember)
})

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
        Tickets is developed, maintained and supported by a small team of passionate developers and community members from around the world. Meet the people who make it all possible!
    </template>
  </VPTeamPageTitle>

  <VPTeamPageSection>
    <template #title>Core Team Members</template>
    <template #lead>
      The core team are the main developers and maintainers of the Tickets project. These are people who are employed or contracted to work for BH Cloud Labs Ltd.
    </template>
    <template #members>
        <VPTeamMembers size="small" :members="core_team" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Community Admins</template>
    <template #lead>
      The community admins help moderate and support the Tickets community. These are all volunteers who dedicate their time to help others.
    </template>
    <template #members>
        <VPTeamMembers size="small" :members="community_admins" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Community Support</template>
    <template #lead>
        The community support team are volunteers who help answer questions and provide support in our Discord server. They are hand selected from our community members based on their knowledge and helpfulness.
    </template>
    <template #members>
        <VPTeamMembers size="small" :members="community_support" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
