// app.js

function IconCloudDemo() {
    const slugs = [
        "typescript", "javascript", "dart", "java", "react", "flutter", 
        "android", "html5", "css3", "nodedotjs", "express", "nextdotjs",
        "prisma", "amazonaws", "postgresql", "firebase", "nginx", "vercel",
        "testinglibrary", "jest", "cypress", "docker", "git", "jira", 
        "github", "gitlab", "visualstudiocode", "androidstudio", 
        "sonarqube", "figma"
    ];

    return (
        <div style={{
            position: 'relative',
            display: 'flex',
            height: '100%',
            width: '100%',
            maxWidth: '32rem',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            borderRadius: '0.5rem',
            border: '1px solid #ccc',
            background: '#f0f0f0',
            padding: '2rem',
            boxSizing: 'border-box'
        }}>
            {/* يجب عليك هنا تعريف مكون IconCloud */}
            <IconCloud iconSlugs={slugs} />
        </div>
    );
}

// تعريف مكون IconCloud
function IconCloud({ iconSlugs }) {
    return (
        <div>
            {iconSlugs.map(slug => (
                <div key={slug}>{slug}</div>
            ))}
        </div>
    );
}

// ربط المكون بجذر الصفحة
ReactDOM.render(<IconCloudDemo />, document.getElementById('root'));

