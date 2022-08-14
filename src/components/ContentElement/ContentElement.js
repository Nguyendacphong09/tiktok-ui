import { MusicNoteIcon, MuteMusicIcon, PauseIcon, PlayIcon, SoundMusicIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import Image from '~/components/Images';
import styles from './ContentElement.module.scss';
import Button from '../Button';
import PopperAccount from '../Popper/PopperAccount/PopperAccount';

const cx = classNames.bind(styles);
function ContentElement({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-content')}>
                <PopperAccount data={data}>
                    <div className={cx('info-popper')}>
                        <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
                        <div className={cx('name')}>
                            <a href="/" target="_blank">
                                <h3 className={cx('full-name')}>{data.full_name}</h3>
                            </a>
                            <h4 className={cx('nick-name')}>{data.nickname}</h4>
                        </div>
                    </div>
                </PopperAccount>
                <Button text="Follow" outline small className={cx('following-btn')} />
                <div className={cx('title-video')}>
                    <span className={cx('title')}>Sing with me</span>
                    <a href="/" className={cx('hag-tags')} alt="hag tags">
                        <span>Tags name</span>
                    </a>
                </div>
            </div>
            <div className={cx('video-content')}>
                <div className={cx('music-title')}>
                    <MusicNoteIcon />
                    <a href="/" className={cx('link-music')} alt="hag tags">
                        Name music
                    </a>
                </div>
                <div className={cx('wrapper-video')}>
                    <video
                        className={cx('video')}
                        src="https://v16-webapp.tiktok.com/0ff0a8c63d716192d5958ed72fefa256/62f8a734/video/tos/maliva/tos-maliva-ve-0068c799-us/df093ce39fd04d7ebe9ec8266de0f075/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2552&bt=1276&cs=0&ds=3&ft=eXd.6Hk_Myq8ZfxCAwe2NiUPml7Gb&mime_type=video_mp4&qs=0&rc=MzlkNjs3MzMzZTNmN2g8aUBpM3k7O2c6ZjUzZTMzZzczNEAtMGMyYGAtNmMxNi4wMF8vYSNiMm5ecjRnc2dgLS1kMS9zcw%3D%3D&l=202208140141280102440870701C119418&btag=80000"
                    />
                    <div className={cx('sound-control')}>
                        <div className={cx('btn-on')}>
                            <MuteMusicIcon />
                        </div>
                        <div className={cx('btn-off')}>
                            <SoundMusicIcon />
                        </div>
                    </div>
                    <div className={cx('video-control')}>
                        <div className={cx('btn-off')}>
                            <PlayIcon />
                        </div>
                        <div className={cx('btn-on')}>
                            <PauseIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('interactive-btn')}></div>
        </div>
    );
}
ContentElement.propTypes = {
    data: PropTypes.object,
};
export default ContentElement;
