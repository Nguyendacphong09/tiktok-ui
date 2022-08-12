import Button from '~/components/Button';
import { HashTagIcon, MusicNoteIcon } from '~/components/Icons';
import Menu from '~/layouts/components/Sidebar/Menu';

const tags = [
    { icon: <HashTagIcon />, text: 'suthatla' },
    { icon: <HashTagIcon />, text: 'mackedoi' },
    { icon: <HashTagIcon />, text: 'sansangthaydoi' },
    { icon: <MusicNoteIcon />, text: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n' },
    {
        icon: <MusicNoteIcon />,
        text: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper &amp; Hoàng Dũng',
    },
    { icon: <MusicNoteIcon />, text: 'Thiên Thần Tình Yêu - RICKY STAR' },
    { icon: <HashTagIcon />, text: '7749hieuung' },
    { icon: <HashTagIcon />, text: 'genzlife' },
    { icon: <MusicNoteIcon />, text: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn' },
    { icon: <MusicNoteIcon />, text: 'Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham' },
];

function DiscoverMenu() {
    return (
        <Menu>
            <div style={{ display: 'inline-flex' }}>
                <Button sidebarBtn leftIcon={tags[0].icon} text={tags[0].text} rounded />
                <Button sidebarBtn leftIcon={tags[1].icon} text={tags[1].text} rounded />
            </div>
            <Button sidebarBtn leftIcon={tags[2].icon} text={tags[2].text} rounded />
            <Button sidebarBtn leftIcon={tags[3].icon} text={tags[3].text} rounded />
            <Button sidebarBtn leftIcon={tags[4].icon} text={tags[4].text} rounded />

            <div style={{ display: 'inline-flex' }}>
                <Button sidebarBtn leftIcon={tags[6].icon} text={tags[6].text} rounded />
                <Button sidebarBtn leftIcon={tags[7].icon} text={tags[7].text} rounded />
            </div>
            <Button sidebarBtn leftIcon={tags[8].icon} text={tags[8].text} rounded />
            <Button sidebarBtn leftIcon={tags[9].icon} text={tags[9].text} rounded />
        </Menu>
    );
}

export default DiscoverMenu;
