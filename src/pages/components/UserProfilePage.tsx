import ComponentDemoPage from '@/components/component-demo/ComponentDemoPage'
import DemoSection from '@/components/component-demo/DemoSection'
import UserProfileCard from '@/components/user-profile/UserProfileCard'

export default function UserProfilePage() {
  return (
    <ComponentDemoPage
      name="User Profile"
      description="An avatar-triggered popover that displays user details and a sign-out action."
    >
      <DemoSection
        title="User Profile Card"
        description="Click the avatar to open the profile popover."
      >
        <UserProfileCard
          name="Maria Lozben"
          email="maria@atlas.design"
          initials="ML"
        />
      </DemoSection>

      <DemoSection
        title="With Long Name"
        description="Initials are auto-derived from the name when not provided."
      >
        <UserProfileCard
          name="Alexander Kovalenko"
          email="alex.kovalenko@atlas.design"
        />
      </DemoSection>
    </ComponentDemoPage>
  )
}
