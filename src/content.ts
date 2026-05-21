
export interface ContentBlock {
  type: 'heading' | 'paragraph' | 'code' | 'list';
  level?: number; // For headings (1, 2, 3...)
  content?: string; // For paragraphs, headings, code
  language?: string; // For code blocks
  items?: string[]; // For lists
}

export const robloxContent: ContentBlock[] = [
  {
    type: 'heading',
    level: 1,
    content: 'Roblox Lua Client คืออะไร ทำอะไรได้บ้าง + หลักการทั้งหมด',
  },
  {
    type: 'heading',
    level: 2,
    content: 'Client ใน Roblox คืออะไร',
  },
  {
    type: 'paragraph',
    content: 'Client = ฝั่งผู้เล่น',
  },
  {
    type: 'paragraph',
    content: 'เวลาคนเข้าเกม Roblox จริงๆเกมจะถูกแบ่งเป็น 2 ฝั่ง:',
  },
  {
    type: 'list',
    items: [
      'Server = ตัวกลางหลักของเกม',
      'Client = เครื่องของผู้เล่นแต่ละคน',
    ],
  },
  {
    type: 'paragraph',
    content: 'ตัว Client จะรับผิดชอบ:',
  },
  {
    type: 'list',
    items: [
      'การแสดงผล',
      'กล้อง',
      'UI',
      'เอฟเฟกต์',
      'Animation',
      'เสียง',
      'Input เมาส์/คีย์บอร์ด',
      'FPS',
      'การควบคุมตัวละคร',
      'Rendering',
      'ระบบลื่นไหลต่างๆ',
    ],
  },
  {
    type: 'paragraph',
    content: 'พูดง่ายๆ:',
  },
  {
    type: 'paragraph',
    content: 'Server = ความจริงของเกม',
  },
  {
    type: 'paragraph',
    content: 'Client = สิ่งที่ผู้เล่นมองเห็น',
  },
  {
    type: 'heading',
    level: 1,
    content: 'Roblox Client Script มีอะไรบ้าง',
  },
  {
    type: 'heading',
    level: 2,
    content: '1. LocalScript',
  },
  {
    type: 'paragraph',
    content: 'ตัวหลักของ Client',
  },
  {
    type: 'paragraph',
    content: 'ใช้กับ:',
  },
  {
    type: 'list',
    items: [
      'GUI',
      'กล้อง',
      'Animation',
      'Input',
      'เอฟเฟกต์',
      'Tool',
      'ระบบยิง',
      'Dash',
      'ViewModel',
      'Hit Effect',
      'Camera Shake',
    ],
  },
  {
    type: 'paragraph',
    content: 'ตัวอย่าง:',
  },
  {
    type: 'code',
    language: 'lua',
    content: 'print("Client Running")',
  },
  {
    type: 'paragraph',
    content: 'วางได้ใน:',
  },
  {
    type: 'list',
    items: [
      'StarterPlayerScripts',
      'StarterCharacterScripts',
      'StarterGui',
      'Tool',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'สิ่งที่ Client ทำได้แบบเทพๆ',
  },
  {
    type: 'heading',
    level: 2,
    content: '1. ระบบยิงปืน FPS',
  },
  {
    type: 'paragraph',
    content: 'Client จะช่วย:',
  },
  {
    type: 'list',
    items: [
      'ยิงลื่น',
      'Raycast เร็ว',
      'ลด Delay',
      'ทำ Recoil',
      'ทำ Bullet Trail',
      'Camera Shake',
      'Crosshair',
      'ViewModel',
      'ADS',
      'Reload Animation',
    ],
  },
  {
    type: 'paragraph',
    content: 'หลักการ:',
  },
  {
    type: 'paragraph',
    content: 'ผู้เล่นยิง -> Client แสดงทันที -> ส่งข้อมูลไป Server -> Server ตรวจอีกที',
  },
  {
    type: 'paragraph',
    content: 'แบบนี้เกมจะลื่น',
  },
  {
    type: 'heading',
    level: 2,
    content: 'ตัวอย่างยิงแบบ Raycast',
  },
  {
    type: 'code',
    language: 'lua',
    content: `local player = game.Players.LocalPlayer
local mouse = player:GetMouse()

mouse.Button1Down:Connect(function()
    local origin = workspace.CurrentCamera.CFrame.Position
    local direction = (mouse.Hit.Position - origin).Unit * 500

    local params = RaycastParams.new()
    params.FilterDescendantsInstances = {player.Character}
    params.FilterType = Enum.RaycastFilterType.Blacklist

    local result = workspace:Raycast(origin, direction, params)

    if result then
        print("Hit:", result.Instance.Name)
    end
end)`,
  },
  {
    type: 'heading',
    level: 1,
    content: 'Raycast คืออะไร',
  },
  {
    type: 'paragraph',
    content: 'Raycast = ยิงเส้นตรวจชน',
  },
  {
    type: 'paragraph',
    content: 'เหมือน:',
  },
  {
    type: 'list',
    items: [
      'กระสุน',
      'Laser',
      'ตรวจมอง',
      'ตรวจ Hitbox',
    ],
  },
  {
    type: 'paragraph',
    content: 'ข้อดี:',
  },
  {
    type: 'list',
    items: [
      'เร็วมาก',
      'ใช้แทนกระสุนจริงได้',
      'FPS สูง',
      'แม่น',
    ],
  },
  {
    type: 'paragraph',
    content: 'นิยมใช้ใน:',
  },
  {
    type: 'list',
    items: [
      'FPS',
      'TPS',
      'Horror',
      'Stealth',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'Client ยิงแบบไหนเจ๋งสุด',
  },
  {
    type: 'heading',
    level: 2,
    content: '1. Raycast Weapon',
  },
  {
    type: 'paragraph',
    content: 'ใช้กับ:',
  },
  {
    type: 'list',
    items: [
      'FPS',
      'Valorant Style',
      'CSGO Style',
      'Arsenal Style',
    ],
  },
  {
    type: 'paragraph',
    content: 'ข้อดี:',
  },
  {
    type: 'list',
    items: [
      'เร็ว',
      'ลื่น',
      'ใช้ทรัพยากรน้อย',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: '2. Projectile',
  },
  {
    type: 'paragraph',
    content: 'สร้างกระสุนจริงวิ่ง',
  },
  {
    type: 'paragraph',
    content: 'ใช้กับ:',
  },
  {
    type: 'list',
    items: [
      'RPG',
      'Rocket',
      'Sniper แบบมี Bullet Drop',
      'Magic',
    ],
  },
  {
    type: 'paragraph',
    content: 'ตัวอย่าง:',
  },
  {
    type: 'code',
    language: 'lua',
    content: `local bullet = Instance.new("Part")
bullet.Size = Vector3.new(0.2,0.2,2)
bullet.CFrame = workspace.CurrentCamera.CFrame
bullet.Velocity = workspace.CurrentCamera.CFrame.LookVector * 300
bullet.Parent = workspace`,
  },
  {
    type: 'heading',
    level: 1,
    content: 'ควรใช้แบบไหน',
  },
  {
    type: 'heading',
    level: 2,
    content: 'เกมยิงเร็ว',
  },
  {
    type: 'list',
    items: [
      'Raycast',
      'FastCast',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'เกมแฟนตาซี',
  },
  {
    type: 'list',
    items: [
      'Projectile',
      'Physics',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'เกมสมจริง',
  },
  {
    type: 'list',
    items: [
      'Hybrid',
      'Client Visual + Server Validation',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'FastCast คืออะไร',
  },
  {
    type: 'paragraph',
    content: 'FastCast = Library ยิงปืนระดับเทพ',
  },
  {
    type: 'paragraph',
    content: 'ใช้จำลองกระสุนเร็วมาก',
  },
  {
    type: 'paragraph',
    content: 'นิยมใช้ใน:',
  },
  {
    type: 'list',
    items: [
      'FPS ขั้นสูง',
      'Military',
      'Sniper',
    ],
  },
  {
    type: 'paragraph',
    content: 'ข้อดี:',
  },
  {
    type: 'list',
    items: [
      'ลื่น',
      'รองรับ Bullet Drop',
      'รองรับ Penetration',
      'ปรับง่าย',
      'Optimized',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'ควรหาพวก System จากไหน',
  },
  {
    type: 'heading',
    level: 2,
    content: '1. Roblox Creator Hub',
  },
  {
    type: 'paragraph',
    content: 'เอกสารหลัก Roblox',
  },
  {
    type: 'list',
    items: [
      'API',
      'ตัวอย่าง',
      'Event',
      'Physics',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: '2. DevForum',
  },
  {
    type: 'paragraph',
    content: 'Community นักพัฒนา Roblox',
  },
  {
    type: 'list',
    items: [
      'ระบบยิง',
      'Optimization',
      'Rendering',
      'AI',
      'Networking',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: '3. GitHub',
  },
  {
    type: 'list',
    items: [
      'FastCast',
      'Knit',
      'Aero',
      'Fusion',
      'Roact',
      'ProfileService',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'Framework ฝั่ง Client ที่นิยม',
  },
  {
    type: 'heading',
    level: 2,
    content: '1. Knit',
  },
  {
    type: 'paragraph',
    content: 'Framework แยก:',
  },
  {
    type: 'list',
    items: [
      'Controller',
      'Service',
    ],
  },
  {
    type: 'paragraph',
    content: 'เหมาะ:',
  },
  {
    type: 'list',
    items: [
      'เกมใหญ่',
      'ระบบเยอะ',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: '2. Fusion',
  },
  {
    type: 'paragraph',
    content: 'UI Framework แบบ Reactive',
  },
  {
    type: 'paragraph',
    content: 'เหมือน React',
  },
  {
    type: 'paragraph',
    content: 'เหมาะ:',
  },
  {
    type: 'list',
    items: [
      'UI เทพๆ',
      'Animation',
      'HUD',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: '3. Roact',
  },
  {
    type: 'paragraph',
    content: 'React ของ Roblox',
  },
  {
    type: 'paragraph',
    content: 'ใช้ทำ:',
  },
  {
    type: 'list',
    items: [
      'UI',
      'Inventory',
      'Shop',
      'Menu',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'ระบบ Client เจ๋งๆที่นิยมทำ',
  },
  {
    type: 'heading',
    level: 2,
    content: 'FPS',
  },
  {
    type: 'list',
    items: [
      'ViewModel',
      'Sway',
      'Recoil',
      'Weapon Bobbing',
      'Aim Down Sight',
      'Bullet Hole',
      'Impact Effect',
      'Muzzle Flash',
      'Hit Marker',
      'Damage Indicator',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'Movement',
  },
  {
    type: 'list',
    items: [
      'Dash',
      'Slide',
      'Wall Run',
      'Double Jump',
      'Climb',
      'Vault',
      'Parkour',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'Camera',
  },
  {
    type: 'list',
    items: [
      'Camera Shake',
      'Dynamic FOV',
      'Lock-On',
      'Smooth Camera',
      'Shoulder Camera',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'Visual',
  },
  {
    type: 'list',
    items: [
      'Blur',
      'Bloom',
      'ColorCorrection',
      'DepthOfField',
      'Motion Blur',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'ตัวอย่าง Camera Shake',
  },
  {
    type: 'code',
    language: 'lua',
    content: `local camera = workspace.CurrentCamera

game:GetService("RunService").RenderStepped:Connect(function()
    local shake = Vector3.new(
        math.random(-1,1)/20,
        math.random(-1,1)/20,
        0
    )

    camera.CFrame = camera.CFrame * CFrame.new(shake)
end)`,
  },
  {
    type: 'heading',
    level: 1,
    content: 'RenderStepped คืออะไร',
  },
  {
    type: 'paragraph',
    content: 'Event ที่ทำงานทุกเฟรม',
  },
  {
    type: 'paragraph',
    content: 'เหมาะกับ:',
  },
  {
    type: 'list',
    items: [
      'กล้อง',
      'ViewModel',
      'Animation',
      'UI Update',
    ],
  },
  {
    type: 'paragraph',
    content: 'สำคัญมากสำหรับ Client',
  },
  {
    type: 'heading',
    level: 1,
    content: 'Client Optimization',
  },
  {
    type: 'heading',
    level: 2,
    content: 'สิ่งที่ควรทำ',
  },
  {
    type: 'heading',
    level: 3,
    content: 'ใช้ LocalScript กับ Effect',
  },
  {
    type: 'paragraph',
    content: 'เพราะ:',
  },
  {
    type: 'list',
    items: [
      'Server ไม่ต้องโหลด',
      'ลื่นกว่า',
    ],
  },
  {
    type: 'heading',
    level: 3,
    content: 'ใช้ Debris',
  },
  {
    type: 'paragraph',
    content: 'ลบ Effect อัตโนมัติ',
  },
  {
    type: 'code',
    language: 'lua',
    content: 'game:GetService("Debris"):AddItem(part,3)',
  },
  {
    type: 'heading',
    level: 3,
    content: 'อย่าสร้าง Part เยอะเกิน',
  },
  {
    type: 'paragraph',
    content: 'ใช้:',
  },
  {
    type: 'list',
    items: [
      'Beam',
      'Trail',
      'Particle',
    ],
  },
  {
    type: 'paragraph',
    content: 'แทน Part จริง',
  },
  {
    type: 'heading',
    level: 1,
    content: 'Networking สำคัญมาก',
  },
  {
    type: 'paragraph',
    content: 'Client ไม่ควรเชื่อถือทั้งหมด',
  },
  {
    type: 'paragraph',
    content: 'ผิด:',
  },
  {
    type: 'code',
    language: 'lua',
    content: 'RemoteEvent:FireServer(999999)',
  },
  {
    type: 'paragraph',
    content: 'Server ต้องตรวจ:',
  },
  {
    type: 'list',
    items: [
      'Damage',
      'Position',
      'Cooldown',
      'Ammo',
    ],
  },
  {
    type: 'paragraph',
    content: 'เสมอ',
  },
  {
    type: 'heading',
    level: 1,
    content: 'RemoteEvent คืออะไร',
  },
  {
    type: 'paragraph',
    content: 'ใช้สื่อสาร:',
  },
  {
    type: 'paragraph',
    content: 'Client -> Server',
  },
  {
    type: 'paragraph',
    content: 'Server -> Client',
  },
  {
    type: 'paragraph',
    content: 'ตัวอย่าง:',
  },
  {
    type: 'code',
    language: 'lua',
    content: 'RemoteEvent:FireServer("Shoot")',
  },
  {
    type: 'paragraph',
    content: 'Server:',
  },
  {
    type: 'code',
    language: 'lua',
    content: `RemoteEvent.OnServerEvent:Connect(function(player,action)
    print(player.Name,action)
end)`,
  },
  {
    type: 'heading',
    level: 1,
    content: 'RemoteFunction',
  },
  {
    type: 'paragraph',
    content: 'ใช้ส่งข้อมูลแบบรอผลกลับ',
  },
  {
    type: 'paragraph',
    content: 'เช่น:',
  },
  {
    type: 'list',
    items: [
      'ซื้อของ',
      'ขอข้อมูล',
      'Save',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'โมเดลระบบยิงยอดนิยม',
  },
  {
    type: 'heading',
    level: 2,
    content: '1. Client Prediction',
  },
  {
    type: 'paragraph',
    content: 'ยิงฝั่ง Client ก่อน',
  },
  {
    type: 'paragraph',
    content: 'Server ค่อยตรวจ',
  },
  {
    type: 'paragraph',
    content: 'ข้อดี:',
  },
  {
    type: 'list',
    items: [
      'ลื่น',
      'Responsive',
    ],
  },
  {
    type: 'paragraph',
    content: 'นิยมมากสุด',
  },
  {
    type: 'heading',
    level: 2,
    content: '2. Server Authoritative',
  },
  {
    type: 'paragraph',
    content: 'Server คุมทุกอย่าง',
  },
  {
    type: 'paragraph',
    content: 'ข้อดี:',
  },
  {
    type: 'list',
    items: [
      'กันโกงดี',
    ],
  },
  {
    type: 'paragraph',
    content: 'ข้อเสีย:',
  },
  {
    type: 'list',
    items: [
      'Delay',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: '3. Hybrid',
  },
  {
    type: 'paragraph',
    content: 'นิยมสุดในเกมใหญ่',
  },
  {
    type: 'paragraph',
    content: 'Client:',
  },
  {
    type: 'list',
    items: [
      'Animation',
      'Effect',
      'Camera',
      'ยิงเบื้องต้น',
    ],
  },
  {
    type: 'paragraph',
    content: 'Server:',
  },
  {
    type: 'list',
    items: [
      'Damage',
      'Hit Validation',
      'Anti Cheat',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'Hitbox System',
  },
  {
    type: 'heading',
    level: 2,
    content: 'แบบ Raycast',
  },
  {
    type: 'paragraph',
    content: 'เร็ว',
  },
  {
    type: 'heading',
    level: 2,
    content: 'แบบ Region',
  },
  {
    type: 'paragraph',
    content: 'ใช้พื้นที่ตรวจ',
  },
  {
    type: 'heading',
    level: 2,
    content: 'แบบ Magnitude',
  },
  {
    type: 'paragraph',
    content: 'วัดระยะ',
  },
  {
    type: 'heading',
    level: 2,
    content: 'แบบ Hitbox Part',
  },
  {
    type: 'paragraph',
    content: 'สร้าง Part โปร่งใสตรวจชน',
  },
  {
    type: 'heading',
    level: 1,
    content: 'Client AI ได้ไหม',
  },
  {
    type: 'paragraph',
    content: 'ได้บางส่วน',
  },
  {
    type: 'paragraph',
    content: 'เช่น:',
  },
  {
    type: 'list',
    items: [
      'NPC Local Animation',
      'Fake NPC',
      'Prediction',
      'Cosmetic AI',
    ],
  },
  {
    type: 'paragraph',
    content: 'แต่ AI หลักควรอยู่ Server',
  },
  {
    type: 'heading',
    level: 1,
    content: 'ระบบ Client ขั้นสูง',
  },
  {
    type: 'heading',
    level: 2,
    content: '1. ViewModel',
  },
  {
    type: 'paragraph',
    content: 'แขน/ปืนเฉพาะคนเล่นเห็น',
  },
  {
    type: 'paragraph',
    content: 'AAA FPS ใช้หมด',
  },
  {
    type: 'heading',
    level: 2,
    content: '2. IK',
  },
  {
    type: 'paragraph',
    content: 'Inverse Kinematics',
  },
  {
    type: 'paragraph',
    content: 'ทำให้:',
  },
  {
    type: 'list',
    items: [
      'มือจับปืนจริง',
      'เท้าวางพื้น',
      'Animation สมจริง',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: '3. Procedural Animation',
  },
  {
    type: 'paragraph',
    content: 'สร้าง Animation แบบ Runtime',
  },
  {
    type: 'paragraph',
    content: 'เช่น:',
  },
  {
    type: 'list',
    items: [
      'เดินตามความเร็ว',
      'Gun Sway',
      'Recoil',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'Libraries ที่ควรรู้',
  },
  {
    type: 'list',
    items: [
      'FastCast',
      'ยิงปืน',
      'Knit',
      'Framework',
      'Trove',
      'จัดการ Memory',
      'Signal',
      'ระบบ Event',
      'Fusion',
      'UI',
      'ProfileService',
      'Data',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'ถ้าจะทำ FPS จริงจัง',
  },
  {
    type: 'paragraph',
    content: 'ควรมี:',
  },
  {
    type: 'list',
    items: [
      'ViewModel',
      'Recoil',
      'Sway',
      'Raycast',
      'Bullet Effect',
      'Hit Marker',
      'Damage Number',
      'Client Prediction',
      'Server Validation',
      'Anti Cheat',
      'Animation Controller',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'Structure โปรเจกต์ที่ดี',
  },
  {
    type: 'code',
    language: 'text',
    content: `ReplicatedStorage
 ├── Remotes
 ├── Modules
 └── Assets

StarterPlayer
 └── StarterPlayerScripts
      ├── Controllers
      ├── Camera
      ├── UI
      └── Weapons`,
  },
  {
    type: 'heading',
    level: 1,
    content: 'Client ใช้กับเกมอะไรได้บ้าง',
  },
  {
    type: 'heading',
    level: 2,
    content: 'FPS',
  },
  {
    type: 'list',
    items: [
      'Arsenal',
      'Phantom Forces',
      'Rivals',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'Anime',
  },
  {
    type: 'list',
    items: [
      'Skill Effect',
      'Aura',
      'Dash',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'Horror',
  },
  {
    type: 'list',
    items: [
      'Flashlight',
      'Camera Effect',
      'Sound System',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'Open World',
  },
  {
    type: 'list',
    items: [
      'Streaming',
      'Dynamic Loading',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'หลักคิดสำคัญ',
  },
  {
    type: 'paragraph',
    content: 'Client = ความลื่น',
  },
  {
    type: 'paragraph',
    content: 'Server = ความจริง',
  },
  {
    type: 'paragraph',
    content: 'ถ้าแยก 2 อย่างนี้เก่ง เกมจะเทพขึ้นมาก',
  },
  {
    type: 'heading',
    level: 1,
    content: 'สิ่งที่มือใหม่ชอบพลาด',
  },
  {
    type: 'heading',
    level: 2,
    content: 'ทำทุกอย่างบน Server',
  },
  {
    type: 'paragraph',
    content: 'ผล:',
  },
  {
    type: 'list',
    items: [
      'Delay',
      'Lag',
      'กระตุก',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'เชื่อ Client มากเกิน',
  },
  {
    type: 'paragraph',
    content: 'ผล:',
  },
  {
    type: 'list',
    items: [
      'โดน Exploit',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'ใช้ while true do เยอะ',
  },
  {
    type: 'paragraph',
    content: 'ผล:',
  },
  {
    type: 'list',
    items: [
      'FPS ตก',
    ],
  },
  {
    type: 'paragraph',
    content: 'ควรใช้:',
  },
  {
    type: 'list',
    items: [
      'RenderStepped',
      'Heartbeat',
      'Event',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'ถ้าอยากเก่งสาย Client จริง',
  },
  {
    type: 'paragraph',
    content: 'ควรศึกษา:',
  },
  {
    type: 'list',
    items: [
      'CFrame',
      'Raycast',
      'RunService',
      'TweenService',
      'Animation',
      'Camera',
      'Networking',
      'Optimization',
      'OOP Lua',
      'ModuleScript',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'ลำดับการเรียนที่ดีที่สุด',
  },
  {
    type: 'heading',
    level: 2,
    content: 'ระดับ 1',
  },
  {
    type: 'list',
    items: [
      'LocalScript',
      'GUI',
      'Tween',
      'Input',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'ระดับ 2',
  },
  {
    type: 'list',
    items: [
      'Camera',
      'Animation',
      'Raycast',
      'Tool',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'ระดับ 3',
  },
  {
    type: 'list',
    items: [
      'ViewModel',
      'Recoil',
      'Dash',
      'Movement',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'ระดับ 4',
  },
  {
    type: 'list',
    items: [
      'Networking',
      'Prediction',
      'FastCast',
      'Framework',
    ],
  },
  {
    type: 'heading',
    level: 2,
    content: 'ระดับ 5',
  },
  {
    type: 'list',
    items: [
      'Procedural Animation',
      'IK',
      'Optimization',
      'Custom Engine Style',
    ],
  },
  {
    type: 'heading',
    level: 1,
    content: 'สรุปสั้นๆ',
  },
  {
    type: 'paragraph',
    content: 'Client คือหัวใจของ:',
  },
  {
    type: 'list',
    items: [
      'ความลื่น',
      'ความเท่',
      'เอฟเฟกต์',
      'FPS',
      'Camera',
      'Animation',
      'UI',
    ],
  },
  {
    type: 'paragraph',
    content: 'เกมที่ดู AAA ส่วนใหญ่ = Client เทพ',
  },
  {
    type: 'paragraph',
    content: 'ถ้าอยากทำเกม Roblox ระดับสูงจริงๆ',
  },
  {
    type: 'paragraph',
    content: 'TIP: Client = สิ่งที่ผู้เล่นมองเห็น ซึ่งสำคัญมากสำหรับความรู้สึก (Game Feel)',
  },
  {
    type: 'paragraph',
    content: 'ควรระวัง: อย่าทำทุกอย่างบน Server เพราะจะทำให้เกมดีเลย์และกระตุก',
  },
  {
    type: 'paragraph',
    content: 'TIP: ใช้ RenderStepped สำหรับสิ่งที่ต้องการความลื่นไหลระดับเฟรมต่อเฟรม',
  },
  {
    type: 'paragraph',
    content: 'ควรระวัง: Client ไม่ควรเชื่อถือทั้งหมด Server ต้องมีการตรวจทานเสมอ (Server Validation)',
  },
];
